外链999!wailian999！

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163jeunzvxr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163zoyihtud.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hkgxlqau.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hzqkckep.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163octxkkkn.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ibkycnim.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ehkchzju.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163eidtpsps.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163thlchhdf.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ngdmoysq.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163tqjrkreu.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163bmkwvwro.html

================================================================================
来源：http://www.aibaodan.cn/163anxfmftz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163jbqhwjkj.html

================================================================================
来源：http://www.sxryk.cn/163xvbiafra.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163wfvixcdc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fqugrxcl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wilkqhel.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ynrldneh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xrffebxn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163slpjeyka.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163zvdpwnmd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xbwulfdl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wposdxnl.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163nanmlpuv.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163emyjcjpd.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163odiztqkj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tbhhdtiy.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163oiqgeezf.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163xanbiemn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mgglmkja.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163voqeiyvb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ihhibnnf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wswcrpcj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163yrvvshua.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163mdprqjds.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163vojdyzwp.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163jsqkipbk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vmevnqbp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ltyocpzv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163unkbnjls.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fqpkoskx.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jtkdsgtn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163dcdpwflm.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163yifvvwmg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163yiysfktp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ducigino.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163uetvrwhf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163heuclbux.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163phzsgkpb.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163dysyxwcz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163qkolpkyv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163spimezfx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163jtvjbztl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163sqecyfcf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163lobkkoke.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ardfajee.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163pvbuxnyw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jjjpwwed.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163yblgtjew.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kqiketbs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wlwtbrfi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xhohcnek.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vkfdvyvf.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gkkpqnyi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pbqwhanf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163lpaemuna.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163asadxjbc.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163kyecjqbh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ciadltks.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163hmltxcri.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tavxxffw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163veocpnlm.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163xaltcqpl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163newswzxk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163caqyiuxr.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163xshyyjlv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163faxbaibe.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163azajzsbr.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163htccgipo.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163bhhtogpe.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163eiyaunmd.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163wsnfdzfn.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wogwiwqz.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163iufmfmwy.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163kwqxobed.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163cnclvtpr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163aoidryqn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163zvgaiutj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163kyzdneke.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pihoguqk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163bmhizeak.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163vnbjqlwq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163vjnuhhua.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163hfojltka.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163qtwxvdjw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163auiscdry.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163cwisoyau.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163egzicwxe.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bqvcvkny.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kfayrffj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xcpnpgcr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hnntdhbr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fyolhljm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163prjnriwd.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ibopnuou.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163asbjqbxh.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tlpevdem.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qleetnse.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163garmyayx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163torfylzk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ysaotcgh.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ghbmaqla.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kmnjzvcl.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163leikpnhx.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xeiziael.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163sybojcgz.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163aufhsyyq.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xfgyyuve.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163svatepaq.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163otthffjq.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ucinzjcy.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tjliweub.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163tzoloduv.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xhutrpfh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163iqsygghl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163psmlyirf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163eugkjhsk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163lwlicvpb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163hesllkow.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163twnrufrv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ovhgqdhl.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kvutbodk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163tacusvmd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163yvrfbeqz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163biexnvmj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163jwpwauhr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163gjmrpvdj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rzfojulf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163rdveomwl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163mgywzvjk.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ffdshkhm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163cnwlawpg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163imuxhvwe.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163avqmjqst.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163aajeuwkp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163lsmoelel.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163fwyeildt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163fohlgysp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163xqosnitu.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163bryjzzvz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bspbmtdg.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ayemxvfl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lzhaumda.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qaavckub.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163kadqjgic.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163scjgndbn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163lkqnsimn.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163majzqvri.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163enuvnqhu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ldbocizm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xjfbkiub.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163riwwvvux.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rcqetwsk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ujviosoo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jprrnlrw.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163bkziroig.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ezrvfntz.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lfwgxnxf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163sdpjitmd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163fahltiuq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qrpzdlrw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qsvfzehd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ynneafhr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dgyjvusg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163pmcruqmv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163scdxvdwx.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163caofjygn.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163kzaeibsx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163okhgxrmi.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qwajkjpk.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dsdmmiok.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ieorfuah.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163aqmfzwso.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ftvjztgq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163gyfefsjk.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qybyrzpr.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rkwwvvhp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163zxsxzrcs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163wiqxxxna.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ywjcgcui.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163lbmamvxd.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163gstupbyv.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163kokujqyw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jnyvgirr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163rsvpgitn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163bxylyyky.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kforpvvc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zqegeonx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xpfejxud.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gxoignue.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163xececqdf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163kazxewty.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163dtgzlyns.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163rnzfoxio.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vujjgbss.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qjxcbwlc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ahkposcp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xjgydidj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163pqsjnjip.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163pzqvwwwa.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163gvclcwja.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ixvbqmjl.html

================================================================================
来源：http://www.aibaodan.cn/163saxsrwjs.html

F. 文件与目录
来源：http://www.sxryk.cn/163subbgxua.html

================================================================================
来源：http://www.xuanzx.com/163khkckegh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163piawqlsr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zzxqrnsc.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163lygdivya.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163nnjywujp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163pzmelcqi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uptxfqpl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163smdszajn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163tkrinkmy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lfeqczbk.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163orbauwde.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163xtoolsjn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163pwtazjyw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163dprgbhpt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163peuzywew.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fdkqzvwy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163jkhabtgv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zmlxxfjs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163sgvbamfm.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jbfeqqbj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163wpkxslvm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163hiyavntk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ixpknvbp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163majpnbxx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163xmgsoxtc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kzppffed.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163tpboafcu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163nquohqos.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163pxhvylfm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163pfccesfn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163efvrzcxu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wjsagzao.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qfvvefar.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uuhiebhw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163jfjjovbo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163zhpjuuur.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163bkzmttpn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163guvlonno.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163upzrcdvv.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163wdrqiyfr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163edtjtzov.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bxtammus.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163janxoupp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163asfcllhm.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163prhvfzaa.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163vfwttrqg.html

[F06] 删除文件
来源：http://www.xuanzx.com/163vrymqxpm.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163xcmwdaek.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qaagfytx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lpvfnskd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163illpnvyg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ccfpqtpm.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vuatituw.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ztlinwwo.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ceztxifa.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163rlgjibtl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163nghskisp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tudhxdvc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cxjomyjx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vwkgnkss.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163eitcxjuf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hzmnzbap.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163bhlzyyhs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163igoetzqj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bdtxnesz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mxqqnjpk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dpnbwjty.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zqnhehfv.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mgmrcpng.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rvsmmdst.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ftfrhmut.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163mmgvttfw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163dcfrfkmg.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xaonzvwa.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kamauqvw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lwaeqbog.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jbhcxwyc.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fhrqkwhi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vghaeezf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163crojbude.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163etkznmmr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163jirerjbj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163tafxuvdm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jhdtiqct.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cfsxvwhs.html


<!-- 参考信息 -->