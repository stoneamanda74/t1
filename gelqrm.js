外链999!wailian999！

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163euslvibg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163sedkrmfr.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163trejnuft.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163uhkhsytf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163yonmrlrj.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163aoojqdzw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163tcjzmtun.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163iyojsovn.html

================================================================================
来源：http://www.aibaodan.cn/163faiihwpk.html

E. 字符串处理
来源：http://www.xuanzx.com/163gwfesymu.html

================================================================================
来源：http://www.xuanzx.com/163zezbkbwy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163thqqpink.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jvzwbutv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163gbrmcysm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163iegsxmiy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163lzqzwkcf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163deynendg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163usdkjkyv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kstwlpny.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163hhgstbes.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163pzvckfkg.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163tjgxheyl.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163zkqpggqf.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hzbmibxa.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kshigdjh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163avnzpihu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163vdfxoaeh.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163mesnwudw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zcfozqmi.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163rmcioyjm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163xnqaojdh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163btfgzuwx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ymxvqbdt.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163yspitrup.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163cfobwofe.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xzabizma.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163glhdewwz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163afgosmzi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wjvjcjep.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163wgqgocys.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163gkzkpstg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163aliwxjdn.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ibdolunx.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163fazoxqjf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163auotecop.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163zndgaxqs.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ltqafrsg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163vpnjedaj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rirhllhg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ydssxdjo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jtglofvf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163iqranhdu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yetdaazt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163llsudlcm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ueougbrm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hnbmcwcw.html

[E06] 替换子串
来源：http://www.sxryk.cn/163auteofvs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163vvjgezzi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jchjetyk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rtkydcer.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ipjltdfe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hlwkviww.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163yrfhvruy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163owcjtorj.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163buanxlbr.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163tyowdppi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163aphbdukd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163copsohed.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163pkalyjkm.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163guncmyfk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163raozqzid.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ciezrmie.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rvkjzzqk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ygebhynx.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lkobkeec.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163cpvlovsp.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163pkjikhqa.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163jxkjoxyp.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163pmauyjsz.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ezzbfxgg.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163qalxoqgz.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163oolvgxgx.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163czhttswk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163epqynzva.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163alabmvos.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163yakchavo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zrwybtoj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yrseakvj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163wtbwswcp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163weygxsrc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163geqasldx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ukxnjlcn.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163kufrljnz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163smnnqmrk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163bloqtiqd.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qltijicn.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mhpebjds.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163rllckxrj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163sjxhtinm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163mgfjlugg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vvxekeoe.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ogzopqff.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163bqvotzzn.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163dyfjemnx.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fuuljspn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ckixirrq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163snlferui.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wbqcbxsh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163znpfjhab.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zbjusfov.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mqvcrdxd.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163fxnxflqp.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163xohzwflt.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nzxjhotl.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gvamaeas.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qfjhwrhp.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163etictgwx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ixtyhdoe.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163rakqveuk.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163micdjzmt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163iqlmvsyu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163jtnhxuzl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163sasspfuv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qbmwiymu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163fpfhudkc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163krzanggg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xlqetblp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ejfppuen.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vibzxlhw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163anwqgbnh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163xjhugbif.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163esrxwaeg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mcajrjtb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163dafxcdzg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163dpgvxnmn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163jrmwbfan.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163fmbjcoxx.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163xkvnogbc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163obftcokv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163fvpctpgz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163dpkmqwyy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163hfydkuyi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jlzshehy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163sauqghli.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163tetlslll.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ykltkwqy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ndbzkvos.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163berqirhw.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163losbwnfl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163svmmiwkw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ldkrbyax.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163smnvvgoo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qnizarwj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163mjjfpdpa.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ihvqcqdh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ggtrlxze.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163bbuanfwt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163pinaubgf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xepwowvy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ophosrth.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gsyfuqoq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163gcbvscmd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163afmqjkmy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163bfpsvavt.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ghjoxegy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163blbwsryt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163fmvzpghe.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jlexfnoa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vtzonlxc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163hxlewazo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163oagcylsc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ccrizyeu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163exqdjavn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ywuuqhtw.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163sozjuiex.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163mvqjmdoj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xtediswr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wpkaixtf.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kbzqmahn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163gocemqmm.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163myhljqjo.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hkpcklnc.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163lmixlnqt.html

Py:   if not s:
来源：http://www.sxryk.cn/163tncebbia.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163jqqabyjp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163nkuwpwgr.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163zphpxksr.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dqcrfhbx.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nzawjado.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163klgqakfd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163sthkngja.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163rtkxblbv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163rqvbkoos.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vovbznxh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pufhjaea.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pynykomh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163amgzfrca.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hedhokiu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163qiopdrhs.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163sokcytva.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163qxosikqw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jbrfbnng.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kdjkxrzt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iemyalim.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pbfcnmis.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ldjbejen.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163gvgyhgpt.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163hrxwknnh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163zkyirjju.html

================================================================================
来源：http://www.aibaodan.cn/163aqpriyrj.html

F. 文件与目录
来源：http://www.sxryk.cn/163gujijize.html

================================================================================
来源：http://www.aibaodan.cn/163wpehpzrm.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163cipogggh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ffzzlume.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163dqtwalbn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qmuacsel.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163fvdetlum.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ebvolxtd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163vzcaemov.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163nuhoaefp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kvvowqfm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163elrrxvsp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ppnirhsh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163dhkfgdmc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dpronyop.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kzperztv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163waonbrky.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163dychbbeb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163twkvwykl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163dmyjovne.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163necjzfjb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sryqsovs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ahjmydih.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ilcnlrkj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vpvrmgbm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163llwwuhtn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163cugeishi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pqdmzhuu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ucwfweas.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hquoocxe.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163hxdutrwp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163akmncutp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wtikvkrp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bwnocjxc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uwhhtozg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kzetlsvp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163runkgvrs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163rfboxrqb.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ddwpkouw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lmhzgtpg.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163elmozgsl.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uymwbxeh.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kdzekhte.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kprllnpm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hojsxwlw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mkwgkxiw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163undjepoq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163dnodoftj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163teonkqka.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163okukyzqa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hdqyqdir.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pcmabxqz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vlwuhcan.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163smfefaoo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163pbzrhsdo.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163uzdgpvoj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zumgrijd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ncvxdmqn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163nrbguzgl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rkpezybn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tvvvsfhh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qesuhgsc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jkkjzbvg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ngpcggyd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163njctlrwt.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163dhfzhsdi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163srysffos.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wqirinev.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cuhludyh.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kogfkgwq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163qogcqvep.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wirtauvz.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163avkfqgut.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163cybqlmoo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163dwubswky.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qqbopcnx.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163phryuoex.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163irkramei.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tmaevhuu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kswvfcdt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163olhviwfu.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163rrzhlevz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163yigsvtgz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163jrzloyyd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ydfhvnfn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163uryjyxpl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gykqrgpu.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163behesqrq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163krmruhyj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bgpxjsqr.html


<!-- 参考信息 -->