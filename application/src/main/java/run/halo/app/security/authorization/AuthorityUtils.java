package run.halo.app.security.authorization;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.GrantedAuthority;

/**
 * Utility methods for manipulating GrantedAuthority collection.
 *
 * @author johnniang
 */
public enum AuthorityUtils {
    ;

    public static final String SCOPE_PREFIX = "SCOPE_";

    public static final String ROLE_PREFIX = "ROLE_";

    public static final String SUPER_ROLE_NAME = "super-role";

    public static final String AUTHENTICATED_ROLE_NAME = "authenticated";

    public static final String ANONYMOUS_ROLE_NAME = "anonymous";

    public static final String COMMENT_MANAGEMENT_ROLE_NAME = "role-template-manage-comments";

    public static final String POST_CONTRIBUTOR_ROLE_NAME = "role-template-post-contributor";

    public static final String THEME_MANAGEMENT_ROLE_NAME = "role-template-manage-themes";

    /**
     * Converts an array of GrantedAuthority objects to a role set.
     *
     * @return a Set of the Strings obtained from each call to
     * GrantedAuthority.getAuthority() and filtered by prefix "ROLE_".
     */
    public static Set<String> authoritiesToRoles(
        Collection<? extends GrantedAuthority> authorities) {
        return authorities.stream()
            .map(GrantedAuthority::getAuthority)
            .filter(authority -> StringUtils.startsWith(authority, ROLE_PREFIX))
            .map(authority -> {
                authority = StringUtils.removeStart(authority, ROLE_PREFIX);
                return authority;
            })
            .collect(Collectors.toSet());
    }

    public static boolean containsSuperRole(Collection<String> roles) {
        return roles.contains(SUPER_ROLE_NAME);
    }

}
