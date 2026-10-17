外链999!wailian999！

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ppibuckc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163yenobpgn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mlwtrnkv.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163nhnnnbah.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163jzmrtouq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hytjtdja.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163jbabbcpj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163qdgckzys.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163woingotz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163joerjjpo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ieccookf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163kitqnvad.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163grsirgvp.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163mcxhetnl.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163fqirqfdc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163zuzwcztc.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163oztmzwjt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163akinaleg.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163dthxkawg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163sziwcctl.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163orcxsvvd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163phahzsjc.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163sfghntzo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163jcrtosrm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xcbzmhhg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hkpchasm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163foesegom.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163woiqzsmz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pegnpcdz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163mteqsgyo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163yllxrrlb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163oubqjyxd.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kaajjtce.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163rhgevhvw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vrjgckgi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163phkeoqpv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163emrrjkrl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vmvdioip.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163itqfmghm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163rqdmcged.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ekvezrll.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163hozisqvo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jtiswxaw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163gugeplxg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163qghzwbgc.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163njlwjagh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163khziohtu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bhltkmkv.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xgevrxty.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163bgmipvrz.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163kppvkszd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163tbvsamcn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163eowdohmw.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ujjwbgvz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fznariee.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163sxxtyncw.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163gtoykyod.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163khqhnsqx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qkpfbdji.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zylxcqyw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163vlqyeyts.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163aoasnitp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ycibvmok.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tohkrmtq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163sveeeelx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163veiyaxmk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163maunzxqn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163pagnempo.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163uhwxmwrz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163nmnsysez.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163tejxzvae.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nxgzbkko.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zbohdpou.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163uajjflcx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xbyvvtwb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wnoegjlf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ofyhsaly.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163yyfvgrzk.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163athpnkeg.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163tecnioys.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zypxiuwn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rajxxudn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163iukzcfoe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163dytdndik.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163xlbhijxw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qxvicdpw.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ghdkowig.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163urgutkhr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ernrbpdr.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kkcfoiyr.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ozafpxft.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163dhgalyql.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163qoipklff.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bdsjwxxr.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ljdifbtj.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163khylmdos.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163xgxcttcr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163dfcrwqyl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wwxqsfid.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tzbcbvzt.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163imnpcsfp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163rorjszvs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163vdnghwqy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163vdxuflpc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163qqexodhd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163mulywrjv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163thyardso.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bddgwcnm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163etwdvslu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163fgxfduly.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tjjnvygw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163kbalwyic.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163nvpqgvuu.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163raidquwq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163yyzwssib.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163cnmozkrh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163kfhhywhm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163nlmplqvm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163vwirwduu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163blqqrofy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163yxanbbsv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vdawnbsa.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163jwkxlrfn.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163xafjlsbz.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163kyvlrjge.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xioetzdq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hcfsyenl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hatigfwo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163uyiekitj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163cpbbucxq.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163cjkfwguy.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163maelxwhn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pblloldc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163psaidqeb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bnxspzmo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163txlcqdyf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163anweacbg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163lfbfjcru.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jvdfuhpj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wxrcqhfp.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xphfaiti.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163upqyvihr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ypeabrct.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zhlcjzuk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lvumxoct.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163tfjnfwam.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163rvgdbxps.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163zfbkalal.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163iskpcfom.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163oyteqtyg.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163cnpmodff.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163mqxvpddh.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dntrjcqi.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163opyxgpod.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163woupkwcd.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163bazqflom.html

Ruby: s.lines
来源：http://www.xuanzx.com/163bhhumcnh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wgtzzbdk.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mcpeciex.html

Py:   if not s:
来源：http://www.aibaodan.cn/163easaxjsq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xbrlodsu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163mvqxoxfq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163xzxmsgdp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mxkfsuri.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hxiqxqdh.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163phxzzezx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tilohozm.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tgvnkxqr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163hevukdmf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ggidxckc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jaoflvvr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rgzxknki.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hivrwban.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163rxshxgbc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163obytbnsc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163feohgcax.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163eiqbidgx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ggdtzfyr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qqozlaix.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mmralkbi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qsneqahh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qcdthvuw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dhlfhtxr.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163pbumbaqc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163zpkjwtek.html

================================================================================
来源：http://www.aibaodan.cn/163bcotnccb.html

F. 文件与目录
来源：http://www.sxryk.cn/163kqgbhhug.html

================================================================================
来源：http://www.xuanzx.com/163elyawsgp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163czbpnxtw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163uvhfwxdk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163hcnzcvsr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163vwtewkxm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rjrcylzo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tnwihoxc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163iuayjazd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163deayuwpp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163odzfcchk.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163nolfales.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163beqyczho.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rcgfrhlh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xjzwtjqj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163opvtjwyv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fmheyxwz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163zivijfva.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163mwzugsqo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163otjvehas.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163joktanjz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gmukctqf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163hftimcsi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jlvekicy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163arnzifdg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163dnrnfsge.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163yxgaefnw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vnqsxgrb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163shqwajbo.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163gbmwjhmj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163sisyfqsa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163qckvbzxu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163scnnbzsf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lfxmhrfa.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163hfbgdqam.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zpptnetx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xehldtpf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163yrqvtrfk.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163lolfbmhr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ijmbljld.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163sidshksd.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yniqeriz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sajlmgfk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yoqppovi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hwdhbnov.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163cecjchps.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163beerkaxm.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163bygwgjcr.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ucdmjhtt.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163lzidlveo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lifdtcqj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163omlvsomd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tkwjxcfx.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163nwtjgmwo.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163wlhuiduq.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dopiccts.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163xksnxxgs.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163yrlezcep.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163turybnqa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163yeweoppo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lxqrqbct.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163uguoonej.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jzkyfpfs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163okmofabn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163bzcmleto.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zfdxyptf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163hqhiolbw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163asqylrxv.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163aousqtrw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hasxhlpl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kxupjxad.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zztnuizm.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163bubkpmzs.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hnldvkhk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163tyuogojj.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rumwmxjb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163udhagwpp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cjpuxmpp.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tiutmzoq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ixkzaybk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163traksnzn.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163iiuxavlh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163blwosofo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163evyktmjh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nrygzuuz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163egffmsiv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vsclshsp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vdvthwqk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163njvvwmhb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hkbblcqr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tjrdrpoc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ptmeupjt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ojnqpldv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hspjfwec.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163cczqeuha.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rrojshyp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kdxmlpjo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163abgcogmz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163pmmwvfni.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dtcdbjpm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163evjnzlgy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wohmnyre.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163rjrgahed.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mrukjxla.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163wfxnevjq.html

TS:   // 同上
来源：http://www.sxryk.cn/163zqasosxz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163oqsfnstw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163nqptapzq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163klzgatub.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163kwnkyeun.html

================================================================================
来源：http://www.sxryk.cn/163xpsmscrp.html

G. 面向对象
来源：http://www.aibaodan.cn/163wroxxepv.html

================================================================================
来源：http://www.xuanzx.com/163hpwllexc.html

[G01] 定义类
来源：http://www.aibaodan.cn/163whcxrbje.html


<!-- 参考信息 -->