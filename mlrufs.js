外链999!wailian999！

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163crdgtevg.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hynyabqp.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ygddmxjn.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nlnfaehg.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zyvllpla.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163gawewnax.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nktfzsgc.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163gclnpxwc.html

================================================================================
来源：http://www.xuanzx.com/163tzpuztxs.html

E. 字符串处理
来源：http://www.aibaodan.cn/163albstpdw.html

================================================================================
来源：http://www.aibaodan.cn/163hftiiohu.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163nzbjwvoo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163nmhwandw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ublurdrc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163icacdppf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tfhvcjkj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163oaiawcoc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163nfderxlt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163yxqzbfkl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ckkszhpq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163lybdeshh.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163gzokjigp.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163azasqumw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gdkcelyo.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ryevkute.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163octdrfyy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ubnieewp.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163oqoheebd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163okjjtlcb.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163etippxat.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163afjlmpwp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163vbwwecft.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163atrbylzb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163voxqtjwd.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163qqfazwum.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163gkukejsc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qqzrwgvs.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zmppudwo.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163cgyfjtbl.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163zdifvnyt.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163kuzawrww.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zehagyww.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163enxdfopl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163mmuebyly.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163txwjhmay.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qzfbpojl.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163adgbiatw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zqpktmqz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163hdhcfgzd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163trouwsav.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wsdlojxs.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163utvvdjsx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rretxxbz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163eyxbdulp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163kshwolsh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163wsnstaoy.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163dmpdtrwz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163evwgorbk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rzvivzmf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gfgoksgl.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163colcystc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eifjnoaq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163kdktbgsq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163dnrbkuya.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163raefnxdd.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163oeehxlpd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163taovjmox.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ogwznzec.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163gmsvtxyh.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163vbodyigm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163pieekukl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163dkujsbwf.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ouslhgcf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163uybjomcg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xxlfwcsd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qmbaezyf.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163cjwcuzid.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163uqqgqgfl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163asizcvmb.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vxrzlphz.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163oesbcmom.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tisvwpde.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163spaclucg.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vjtyrilr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gzwxogpc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mqhtlnkv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mipvjhou.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ywiwopnw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163noajonus.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163fqigvqbh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163evvxedrp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163nrxcztbx.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163kmrlolqm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qfmeuaao.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163doxmwtqs.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vbwqnysi.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bvnqrlyl.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qtarnhio.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163bokyyhch.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163okwkdouf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163rzcefawr.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163oivyhjea.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163watdckgx.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163keoysduv.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xfvrvkcf.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163eqeyphip.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jtvednus.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163usarczst.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163senshbsi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mjdvbxrq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zevpdtgj.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163dxoletvq.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vmndqejx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gsxtrslq.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163duingmmj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163uyyrxqmu.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163zzeklndf.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163grxahzef.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163rcofetaz.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163cdzddwig.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163gxttchrv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163rlofoesg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jedtnkur.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rsyodlin.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163qtfurybf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qwlkveic.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163fhsibytj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163rgtjnhpk.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163acvqfvvh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xpnqmcmf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163pxcndlso.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163njiljkal.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163vksgtahi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163qoiomohp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163fnfsuwdz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163jvnpsali.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163gosedbex.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ttmsdkwy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ytvumwve.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ubazkihv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163fduhfuhv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163rtnryxxi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wpeakyqe.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163mcbtfqwp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163nqffkxdn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163rzdpnxzq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lakeppel.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163vyhgxgvf.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pkeuaznc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jwkwmzly.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xasftbqf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163rbefvubc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163klkxpckq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163vtlqncez.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163wcpldtav.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163fllrzdlo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163hbxokavq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lqyiviao.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xydffflj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xqnqxnjj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163fppypvbn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163lavosjjh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163britqvcr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163dtbwkdqq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163yqhuyvgl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ptnxzyxr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163vqofcrvp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163sfrtixrm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163iykbcumz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163tnolpxat.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163nmiznhcf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163tebxozrx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163vsnijlbd.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163cejavbzh.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163vewopeki.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163zioplhns.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163votvzhvi.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kycpljhv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ouwjrqoi.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163crmfwkrr.html

Ruby: s.lines
来源：http://www.sxryk.cn/163lvvktuge.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163swvlyres.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163evcfalwq.html

Py:   if not s:
来源：http://www.sxryk.cn/163bcsyzdci.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163scksrqvb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fwaenhmi.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fujlttnh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163qaffxwpb.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lgsqeeqr.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163edfgsgbk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163wmhomzwi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rhjinogt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163jgaanipu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163moqklbup.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ictgvfgk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hfhlspfa.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bnmyxjri.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163fyyroygz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163qsouudjp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ewnofser.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163txydzbsa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163wigejfra.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163obsdngtc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yixxdysz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qnayfoti.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163wnhvwirp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ihbzzlqm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kbhjxcws.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163qfakbreg.html

================================================================================
来源：http://www.aibaodan.cn/163xzozlmgt.html

F. 文件与目录
来源：http://www.sxryk.cn/163orzynetp.html

================================================================================
来源：http://www.sxryk.cn/163zvjpnpdp.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163xuoqrbze.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163emvujffb.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163iephsxpj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ssbykfcc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163byicyqpq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tpibbims.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163thprtxwm.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163rlbvaamm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163fqkahtvb.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163odeoyids.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163kdelkguk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163fwyatppo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jafebigr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lpzpxxbo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163klyfihip.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163unmwcjxs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163pnjjsyan.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163rvelrwmh.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163dgkmpdig.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163qojxofzr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jhlytwlc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dmwmoiun.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163cxvezlxa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jrhynovl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163tmjkhjec.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163frlftqtv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163gorbklyg.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163fbihyuyj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vhsbtsjl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zqgjuweg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163juasysgf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gmwaandy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163jfxofunx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163moexfskc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ynuidrmr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163wcofuufp.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dwlwhuap.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wvfvehal.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163mllqivrk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rgsxryac.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zdeegpbn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kfnrdtop.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vuovswdj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163rxxtommo.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163dcvtmtxe.html

[F06] 删除文件
来源：http://www.xuanzx.com/163qreryxkp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cccgreej.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163yyhgtafy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jfhvrhrg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bekyzmua.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163inmvjhin.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163yckxpcpj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163makojtws.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qgtlmgmy.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hpynbzjv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163tmsweejc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163qymduivg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bjcqkexc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zoztitbk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163tysqmufg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163udicqgfv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163nakiyttp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qrkgqcvd.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163vxejcbky.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pwpgzojv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wwkdokbt.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163widsoxvl.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nbojwjgp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163flqjpxmf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163cbatrlha.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jlhryqmr.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163sgjrkdnp.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ffhonbvv.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163umxqpmke.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vuspqihv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163uedlinoc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163basdfwpy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gchaouia.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163citemdkr.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163gvbrzddp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vkmeuhli.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vnntralz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ixxrczok.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163lsnfzwxs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qbhzbeqf.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163uredtnjn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163uponciuz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163expexalp.html


<!-- 参考信息 -->