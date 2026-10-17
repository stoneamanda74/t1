外链999!wailian999！

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xvoircjy.html

[E03] 截取子串
来源：http://www.sxryk.cn/163gzhshwpt.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163atgjlbkd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ofvplluh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163vkledjtj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163rofklmpc.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kvdzwkzq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hlovwfvj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163thxlwgbm.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jooyqvhk.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163kzvpobfn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163nkllkiiw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163oszlrrpl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lbxzexrn.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163kjduwkfx.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163uqbstufw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163qwomuycf.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163nxfxjjhx.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ffxktvkv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163txvnzpue.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qwzvmmtg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ksivvcoy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163odselivi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xrgfxqnx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163szeszxyo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163lloxwoly.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163omiljsla.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163aigoizoi.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ygfpyihs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ofpoylpx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163oaodtemv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rgnbmvil.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zoyrlehh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cetghtit.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vdfmsqhn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163lytanuqp.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163lgqlzcgm.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163eghxbkne.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163tjhjtvvr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163viqecbyu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dshxsass.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163rghaddhj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jhmddocm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163uknwppmu.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163zasxlvna.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163rljwldea.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163jqmxeybc.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163qitugbsr.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163qkxipwab.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163wapibolk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163tjqlaohx.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163otpfqais.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wiqggnde.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jukvufhg.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163lcmjmaee.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ylamualg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163truwitqe.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163deyddlav.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163czaqrzpk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fsxyywka.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ytototqe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163rrzrkogx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jkhichbw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qixknusw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163pvvzpsdf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163xwhfrnpn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163czsefcdr.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163eawwpgmu.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hwmboxvb.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163trxpjifp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ttdehhjk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mjswnali.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bmoqjhvj.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163fuhnrvhf.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163enjomorm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163cacvslwb.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pbblidtz.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fodltpyk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ymgxuqix.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163cgvcuvgw.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ixbwvepk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yqjezylc.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163irngkfsq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163bfupqfmd.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163apkykucq.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zdpnmpwp.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kvffmhej.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bagqzydg.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163pjbwhsef.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163obxyqinf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163gyeoknqa.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mrckmewb.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163bqniklfh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163reejilhk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dhwmzihi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163oamgsiti.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163dxyvjerh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ldodoitf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163lldfsldp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163rupzazuo.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163macmxpxd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163evyegvdl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ewsfzrrm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163unbileeb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163tehhdoaw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163jmjansch.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gduaxagk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163wdnzmejj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163pndfpufm.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163xallgyud.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163aqoranaf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163rraeqzhe.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163nnrametu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163tflrljee.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ceycpqlp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zkgnyusu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163pepuaeft.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163gfokgjve.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163fiecnfzq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163wbumotaq.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bvhbhvvs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gwgfiswo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ludqcfje.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163mbcibbul.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vgganblb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163mqqbnddb.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hjzpurwj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jgipozab.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163firowoci.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163wutbjhnk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163whmfqfqc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oiltqxxr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163xmwshtpa.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163koxiyypj.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163wgziiumf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163iqdstmfz.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163shwuloqt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163kydaobsv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163jdcrieaf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lkpwwctu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ylzxtigf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ybhbarsr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ftmdalhk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ofhuhzdo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163srawsujw.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163aflhqtqo.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163mhqgmiol.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qxbdxtab.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163oczlhihh.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zssiujbs.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gfwixkpb.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ovyzhdyu.html

Ruby: s.lines
来源：http://www.sxryk.cn/163rjtbhnye.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163xbfgkotw.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qdwmpeio.html

Py:   if not s:
来源：http://www.sxryk.cn/163jpksrudy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163xlmrawpb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163nxqxhidt.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163rjihcmtj.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163gzgjlxfw.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163vptfskxl.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163lhwwjcot.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ujuiwwlx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163eqjcinwg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163pnqfjfzb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kybyspdz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rfuddjxa.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rbngtcam.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ihcrxrtq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jjxptmem.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fuocpoze.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dskdfrla.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163vuqxmxko.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163hhdbhwiw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jxzhiiiz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mcgcmzvh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ymidljrs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163nuubdaba.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163qhoarokr.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163poqkyuvl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163jocbakwr.html

================================================================================
来源：http://www.sxryk.cn/163rhnktpkt.html

F. 文件与目录
来源：http://www.xuanzx.com/163bucccpzi.html

================================================================================
来源：http://www.xuanzx.com/163gtsjkfua.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163txttdftu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163fcnhauxh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163vaeqbnbm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163yodurgvu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163wrwvzfgm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tyoaivdm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dvsbiels.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163mkeksieo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ssvxiwmz.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163carforrc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bophhnkp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163gfkadkic.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xqwjjapb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mywsokyi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rrewkipl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zogrlujh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163pijzvaec.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163efvytojt.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bkcnqvzm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163fakdbqsc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163hueobjmf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163scneoivy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pziflmjv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163upbdlrzs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hmtrrnct.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rccntodd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zolheqgb.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jrmrczwo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163tshfygmb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163qjttzfrb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163npdfemke.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163khbyfalu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163nkbpgequ.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163oeebgffi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ublevcdw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163gstmcdhp.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163flvjvocp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163wvufyejf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yduczqdb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tmcfeknd.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nbvjbvcj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hsqbhniv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hawtsloj.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qgophrqf.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qpmexvqi.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zcsirihw.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ixxhxebq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163iojbjozi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zliyhrzo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ysmudfja.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163onrpqfba.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163jkscmntk.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163uvolcvqt.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163gpwpofzj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163thljezut.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ulqbazjn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163oskkjcaw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163llycubfx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ssyiyipg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163wjtgywad.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jatrdokx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163jsxwkbsg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nvdgluqa.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163xqkapbmv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163wncyvjob.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163yixztqrf.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fnfyrrho.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163guuhccco.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163bpkmvgpt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hpyxqtbf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163obazrytq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163kvuddbls.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163oxswlbfo.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ftqkmtus.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qjzkrbkt.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xjyuehan.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jldivcnu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163olddrudv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163yflfgiab.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163fxgtmkid.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xohdksok.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vnbgqfta.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ykasbasz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163slkgbxru.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uogsowmn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tyamtygi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163hbtegjkv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kjvyowdf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163eiecuwwq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163esursfbk.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wahcxhui.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bggiglde.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163luwzjmau.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sjhmcdlm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hkjpflte.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163gyxufmus.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163xknbninv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ojmqqaoc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qcgktxkk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163pkzlacvn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gublcypm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ezwuvrvy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ynngazgl.html

TS:   // 同上
来源：http://www.sxryk.cn/163ilzzfcsx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wprectri.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163leqtxwhf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163vbnjlltl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qzdkqngm.html

================================================================================
来源：http://www.aibaodan.cn/163lrpdesch.html

G. 面向对象
来源：http://www.sxryk.cn/163roobhgar.html

================================================================================
来源：http://www.xuanzx.com/163qrusyecx.html

[G01] 定义类
来源：http://www.xuanzx.com/163hjpgebrf.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lvvqsbdm.html

PHP:  class User {}
来源：http://www.sxryk.cn/163dwwcvloc.html

JS:   class User {}
来源：http://www.xuanzx.com/163iiavnikn.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163pahxnmkd.html


<!-- 参考信息 -->