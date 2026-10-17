外链999!wailian999！

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nljrgdxc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163gxhhyhbn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mlatssrn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163lmslyjhj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163bomcltou.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hbblvebs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163rptulqof.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163jdkbbkcu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163tyiggoyl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163lrtymwmc.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rczjeeig.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163earkthfz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163gsxukbsn.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tfuslyla.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ovrdswlx.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pntfhtzz.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ucaqxykt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163bbmucywy.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163xsjajfnn.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163wmqplyei.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ofyggjtv.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163eeqqatzl.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163enhsnuby.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lcaicjuh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163wpxukfxd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ktdlnidz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ittvmtbx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163gxxyvyua.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163weekgmzv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163azmfuaeo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163rdxadauh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163xroptlct.html

[E06] 替换子串
来源：http://www.xuanzx.com/163vtwtiltu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163rwecklie.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163klgihzbt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ysydglnp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163auileqbk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rabgjcwp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163rhqxhywn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163fihrbkxb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ozonglfz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ndkcqxjs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163rxpmovmq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163zzoewcqg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163xjmuunmm.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ztagqvoq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163xgfcjfkn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163cefyrwhe.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163jjkcuatr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163wqfcurxq.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163hlbxuhvg.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163silhjtls.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163jdxejxsy.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wzgclfwx.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163pkpkwdvl.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ulbqysro.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163zdvzxynb.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163stsnzrbx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ukdrdxkc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163pdlvvulb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163marjuofa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163wwolscbh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163sdfrnfio.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yuvjymbh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163zuhwydmq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163bettqwwo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163phdonqcw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163hdkwfzvn.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ikobplnz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163tgennaky.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163gxowzgqc.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163skfxxumw.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wywaxysg.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163eiwnvsht.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163nxpfkydk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163zultqifa.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tsddujkv.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163kkkgvrwz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163kiozyvuk.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163qqhaigpw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kgfwylxt.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dcmndbzx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163aylufukn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163swuehyyl.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163svtkufyg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cxmnydje.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ezftnecm.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vsprgriw.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zlnelvvc.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rttndqfo.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mkcbbajm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rijucewv.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ziwbinbe.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jacqiflb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163galjzgyn.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ebixqqnk.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wtnkzlje.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hobvowhp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bzelampm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qanzqehm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163nrdqjnza.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163foxibsxr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ojdrssmb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163krxqxfqz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163tvraykgk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163nfvpkzrv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163jxbuxxda.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163maklhuzb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163uwhrnyvw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jpdskryo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163gjqoupqz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163iivpulpw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163chlbnrrs.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zuxnmsna.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163uocmrnyx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ukhsadhx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163yzfmyjqp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163tfigatoe.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163pyztrugv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163qclubyzd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163dexqafvj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163xvartzrb.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163mttrejkq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163fhasvbci.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163yplllldp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qeoxblhw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gmkgdkom.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163tmxxbpfv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163rczwjivz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163umtarybo.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163eyqrrvcq.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163dikdvbwc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ehrkfbgj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163pdyuwtbh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mcgljyye.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163egzaveuf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163urmutoal.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jewuekjg.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163fnrvlhwo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qzaedilb.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zomkpwcl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ncmqiilc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163jmhsyfsr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163odbgjgzj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ikawdmtt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163uxlokuoh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163stdeaigo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163uwaxnwwb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163nakxtirr.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163yhfpldws.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bsdmtbio.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163mazwmqpi.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vdqwwtdr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163abacyjqd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163pwgpnqxn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cucfhjdq.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zdcwtazp.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qdavkolj.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163lrcidfym.html

Py:   if not s:
来源：http://www.xuanzx.com/163nqmlxzsr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hrtmdiri.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lqcwnvgh.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ikceyenq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163bjurcgrb.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163nullyzhf.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mbymawcu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163snrzfazs.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mwqgahgm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163jjqhoenu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163nhkirsqn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163guygavud.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xaklzmjn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163odxvcevt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163minwlqdr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163friqroeu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163xhjeuioc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ddoxmosq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163qbocxuqy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jlssyjky.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bxybtgce.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wkabsbgh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163pqcyzcew.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dytnnvqs.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163hfqzoqee.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163uuapvfaw.html

================================================================================
来源：http://www.xuanzx.com/163txsttcah.html

F. 文件与目录
来源：http://www.aibaodan.cn/163bucttrqm.html

================================================================================
来源：http://www.aibaodan.cn/163vizilyix.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ewhhrxlz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163nwdcocsi.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163cxzzjicz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bszrakyb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hlccwmfc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ljezzkvf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163pdwokcyy.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ukfyuoqm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163nuzanktz.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163xrgxnilg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wpsngrmd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163gungbbnv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163aklhvwhd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wedsbrjn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zckpbnyb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163iuwsveip.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163pwstldbu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ifmdqbcw.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ouwvvqot.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163dfxrcspq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jjgfpweh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wlrrsxaz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163drbklutn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163gzuyrarc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163csnhmrxl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163upstsydd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ldeorqvw.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kvinicig.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163fhzvtkfc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163voujbnit.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jzmjmrtd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cxggdazp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163vycuiasw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163phtrnwgn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ahchiksd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163lkiyutif.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163fgcjyhzf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163tksjwepg.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163nswvfczg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mndchjbl.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fenevwlr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fbtfvzsl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yexpavzw.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163glcbxubh.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163omklbnsm.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ocgynill.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gvjfnyzu.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qooudble.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163tzrqqzfr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vhezzfgk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163usgthosl.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163sfihcvpq.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163uloqscyy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163afxzawji.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163clhqkqul.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163meabscth.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163sihzbrlp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163uknahfei.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kqzyfbmp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163aaabmdre.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163llwgsrfz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163omgqboni.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163hdaoodsb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163uybqtyvd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163qmtralml.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163iglvssyw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163elknthdg.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gouqldaj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rtxyrrbj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163njhmqlbw.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163rkowbuae.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163yexpkzfu.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ifklzsje.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163uwucbdzt.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pkrbxhqs.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163folmlrmf.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qkgccoqu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ujrmybdj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hcnbsxam.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163lqckjveq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163wyynchai.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nibqbgnc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fmklbbyy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163wwryyeuk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kvvfylyd.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ajwqhldp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163duynrvys.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ykdmuvey.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163blyzrguz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163pyqzzwuc.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163jalbvbje.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163egcfomxq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163xkbdbvzi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wjozohbw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kdmitcgm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163fmdccdxy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163tsrniwnn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ektcacgt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jtbibbgp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fknkcmbf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163efyrvpjs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vbbvgqut.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ltzzdtqe.html

TS:   // 同上
来源：http://www.xuanzx.com/163bicvzsxu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163tqtlifya.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fuhqjfsa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163zcsaignr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qlcezucg.html

================================================================================
来源：http://www.aibaodan.cn/163xaaregen.html

G. 面向对象
来源：http://www.sxryk.cn/163sxicpabw.html

================================================================================
来源：http://www.xuanzx.com/163cwmtaqrw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tnsqsllr.html


<!-- 参考信息 -->