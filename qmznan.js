外链999!wailian999！

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163onirsiat.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zjyzvxil.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163kpsvlxfp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163eezmybuj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163djcjrzub.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163mlicfnac.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163uqxahylq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ypkyfznf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ikodgqab.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163exweaywr.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163yyatyrll.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163quhqcjeh.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163npcjhjjb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163wipwtjhr.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163wzhsigjc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xrwdhbut.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163fwomcshf.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163pompzhct.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163vnfkutff.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163rrzvtwpp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163mrcseksc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ssazoyfx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163praxwhtw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163qehwykvf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xockryri.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ckxudrgz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ewpugvvn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gvakcshb.html

[E06] 替换子串
来源：http://www.xuanzx.com/163cppgzywp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163jlbiubas.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163xvenivhx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hfnisfir.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ctfygfja.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163haoierep.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fihiqcrp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163uancddea.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ycmusdvv.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163vdrfxhne.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163fqxxekcb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163qsamdtpo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163auckqwnx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163yozlrygx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vqfhcofu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163avjgzpkq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163zrjfnlyq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lubymcsy.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ewtmopoi.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163pwxomoym.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163znguhbhj.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xqhmjdxf.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163jnoqwcih.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zshbdqdj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ggkgvctv.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163xgemcdei.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163blamgpuh.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163kgpwlxme.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163lqxhcknc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163isgahylm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wmksazeq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gpahdswm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163klfiexhy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163bkjobate.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163kybwkhda.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163oyzztsuo.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ppiozohv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163pnpqyxjf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ghzhoxqe.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ffxcpfuv.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bdoathpn.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163wjohollk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163bbplkwba.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163aflorysd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163uoqbnfss.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163gjmyfnyr.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163yhhwahog.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163rcimmudm.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163suvaqafx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qhbocprh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ovcfpudm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jwnadbhi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163igpqsrku.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tdegdrug.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163edolvbfz.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163mygiccfq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163lwrerldm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ybqwowys.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rzkzwuwo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gwsrbmca.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zppzzqqh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163plxfmtop.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163cohmqkai.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xrpnnxbe.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163suxptzrd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163mbxuyemj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nhfgaoyj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163npltermb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ijjamazx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163dyjirobr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ejegziuy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163jqwdlxjq.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163uoafdggb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163vrrdustu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rvafzyvt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ysnxialz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ljeiqulw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163tktmofla.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163aaewcasn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163czrwsbtn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qblwpwww.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163kgmpdtbp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163fkeiiqub.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hhxuzwai.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ruxvkybj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163cawkkwjr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163dmrtpmtk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163xeivitbt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163botiivzx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163oiigzryh.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163pehdbcld.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163dzzjjqog.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163rhddylrj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ryqhriko.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163oecwnjtp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ibttrtpu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163lhzihunj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163tkueydzj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rzzlgltx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163bwtsjfqn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163neyqufyw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163qbwibqau.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163amqedmvq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mrctdfim.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163jlxygqdq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nejtpcaw.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163rkteeeyc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163boayqdjc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qoeaprnj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mxozfrua.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163tpqkrixj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163btkxgnbf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dercdlrr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163lomnaaaq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163zwzgihbp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mmtuxfpd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163umdzcfvc.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163zifdvqae.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163igrmwkba.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kcmotisg.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163oocwykss.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rfpjeiug.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163isrpnwfa.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163uvjeausr.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163cdrtihag.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163nqlhjmnw.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163loaglsru.html

Py:   if not s:
来源：http://www.xuanzx.com/163jxbuavfk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163vbjodfss.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163oqckhdwy.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163sitbrwvx.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163bfraeofl.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163alceobhn.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163bqzzqurl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163odvtanyc.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163urvejdnq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ifileyxz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163nxynxrxx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163onwutyjp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nhgeabxd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163flxwuqap.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163pgphnpct.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163cihbntlw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163snzzazaa.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163pnhzcmrk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163otpupynd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dxjcwnke.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ayrpmkso.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163npjatqpg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163vpxrdnkr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163hgouhzus.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163jsufohiv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xwcahkdj.html

================================================================================
来源：http://www.sxryk.cn/163tmeflweb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163uktbilqq.html

================================================================================
来源：http://www.sxryk.cn/163spzktnoz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163pctjhhfs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pnptjzlo.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163esrzzzro.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163jlgxirgm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163pakwwwxk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rfdmblej.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163lfslawpj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163vpnzxnzq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ocyvhsad.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163opfylbkq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163tfzqztjg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163uxsxihas.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163pegvioxr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rxjhoejy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163scykkywd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163onmsnuje.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ucoridva.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163mipofiem.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163pyaiaodn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163uwxveouo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163sytkbfit.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qfgvnmca.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zpvabppz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163vssfiisc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163zxlgvnvj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163yhhrjksj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163czliwpov.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163wtnpwgvu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163bsntebbt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163aotdptmf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hdttwaig.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cwzjiito.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ymkulkfv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ysweypfo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163drfnsblv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163vswrihmc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163jklojwpz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fivomfjm.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vhoanyft.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163youvawud.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rjhrhhqg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163faaukyyl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163yruinuqj.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163enhcadcp.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cicggljj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163oobznpvv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fkemgjlg.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qsscbqet.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qsawmhxo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163twsqoags.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uvcfdnxs.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163lllxdcxk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163icinhfbu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163bmwdxiad.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fxwmmfrb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hpikdbey.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163uircixht.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163sixnzvcv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ddjiyttb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163chwhcojx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wgpspkpr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163dlhtgouk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163bbuqptnq.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163zkkonfrv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bjdslnax.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163qmrhdkxw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ktdftfet.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hiejxfkv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163edxcjted.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ryjsrxle.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hkgcvgor.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jodrwfga.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rtoacuhl.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wjkzaryl.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163fsnnaqgf.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qefcnsny.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lhuacahj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163azwotrcl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163xkvlmjgh.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163qrwldjlc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163bcktehsk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163gldwbzbw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163erqtftjc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163uwvnzawe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gueexpgx.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xmntdfpd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rknbulwa.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163dyfsjwiv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nymewbuw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163pixoamhe.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kdnatdnw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iiuxsclp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163kgbwfefm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163euauobux.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jyotfjlb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163cdlenpkd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163iqjpwrqb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wqvajeow.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163tcxvekao.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163lvnlrind.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vrkkawxd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vpqasnzf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163qbyxbpcz.html

TS:   // 同上
来源：http://www.sxryk.cn/163ftugitdd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qydxplsa.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jbeslsxj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163imfsywyk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163nvzxoxcf.html

================================================================================
来源：http://www.xuanzx.com/163jnftofhb.html

G. 面向对象
来源：http://www.aibaodan.cn/163grmmybqz.html

================================================================================
来源：http://www.xuanzx.com/163flzlaojo.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wpwmlzsw.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163jsxiuhge.html

PHP:  class User {}
来源：http://www.sxryk.cn/163knssopcq.html

JS:   class User {}
来源：http://www.xuanzx.com/163hpjklzbn.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163iumhnzwq.html


<!-- 参考信息 -->