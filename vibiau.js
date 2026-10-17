外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163tqxibudv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163dfyvjkwh.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qvazuoqw.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163xzrjzunv.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163egmrnqdh.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163roabnnoa.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163dbjmecdv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vrusblxw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ypztmfrf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163dvsrcqrt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tggxjlgn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ysscpano.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163epesumio.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ddzlaajz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163tqpoaqhb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ipznhldj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rwqymdpn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rvpoocjf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zjwxksdm.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cvxwtopg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jcynozuu.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163yxjvnaha.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jktncdje.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xriwzlmg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bevqhhib.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ehomrvgr.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ogceqccg.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163dzasmuyz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163msvqydlh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ybrphebm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163aqkcdbjg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163cxpxglgx.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kuxmvtuc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ijzsvkoo.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kovlovhj.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qvtxubvq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ofjpvzww.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jspilris.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bhkgwqbb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163voiqfaov.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163aeqtlwxb.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pdrxgoow.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163anizgtyx.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163qaiaijsi.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163cgjpfwcf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163dkmsxomt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xosbjiua.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163lqzrxiup.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163vvbvvkqs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163dwqxucio.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163igodscvv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163wkkdinaz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kwmahoqt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bdwcjhpy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163okwodikj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163drudzibs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163wqjvotoj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163xwalrgao.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163zkmpixzc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pxuvrqii.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163epdgykxj.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163oyqhggtw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163pgzhcpsk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163urbjiqwz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qvxwdqlp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163nhgjviav.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zsexsziu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hxjaqeps.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163btiknnzq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163pvhwipql.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163nrsfconb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163etgsfwog.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163eqvpjksb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qmurspjs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mkrcuorf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163lpqbxqtb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163qluowari.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163atqnaehx.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163vquoving.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163pqkmggxo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ojlhjupe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163vncuzfob.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kulfikdy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163medvffvb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163vtrjynwe.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bokchkga.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xqbajexv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163dcqitfqs.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163czjdiumh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ibmvganx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gawkdljw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mbtgivak.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gxplhxsl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wlpulzyo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163fbyzlmco.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163fgwzgabm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ipsjqqoe.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ueneozib.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ionixrcp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163emkyqxgk.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ktztbvnv.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163asnnnztg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163aubxsunn.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ikmuqero.html

Ruby: s.lines
来源：http://www.sxryk.cn/163yemgnqep.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163dgelhrmz.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163wekefaep.html

Py:   if not s:
来源：http://www.sxryk.cn/163yphkwjwq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qlqypbdh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rpyycoeh.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wikavcyh.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163cyuzsmrz.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xtbxkcmg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163nltkjwnm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163wbkpvimj.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163tclqbxfj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163bckgvclx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163lsoyrjcs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fhylsdiy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ukbtwcud.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lbnwilzy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163wimhtmfa.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ktamjwto.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zuxssjjh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bvmukynd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163pdgandiz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jzahmoun.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163uyzgmksj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nyrybhcn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hjvrlnnw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163hdbgmajf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ruebzkdy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163rnissvze.html

================================================================================
来源：http://www.sxryk.cn/163rlscgmra.html

F. 文件与目录
来源：http://www.aibaodan.cn/163emwyuorq.html

================================================================================
来源：http://www.xuanzx.com/163tbztqegf.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163tnyxekrn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163nbzqzfsh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163rcbkqzjg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ofnjulba.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vsdhtqyn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kjpzltfl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163nudaqzqd.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zzgipygs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kiibnwoj.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163izohtuzx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vowtljqh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163dpiqwuin.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163dspshwel.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fkkhlwck.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rmprknpc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163hoycnvta.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163sxcjkwua.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163pldrfsbi.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163bpivcktp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163nqhjeing.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qdalfkec.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gpzfncvt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163opunlldl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163okonhuew.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sbvqbqkt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163uwbhcqsn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163yoenhtcy.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ukycpkbr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ykytybnn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163pfdvyvaf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qhdbwlbi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ltsdyjco.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ejpdukcw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xitkmllj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163bkzajvll.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fcixjxzh.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tjomsfwa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163fzytncjb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zokcjgfz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hdzocare.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163flkerfbf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hvjfnfgi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vclulqrj.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dgbcvjra.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163mrcfflfk.html

[F06] 删除文件
来源：http://www.xuanzx.com/163drupydxl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163yjswjwrd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jqysckcp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mllysqur.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vitrcpkt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gayqlbjz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163lbpxzpiw.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163etmjiikr.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163acacafwr.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163uuiwshok.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ntsxrsww.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163wlwacmiw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hioxwfhx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jupgbzui.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xxcovqtk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mivdmmpl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163jszkiegb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ivdfwcvh.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163amzbsaix.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163dcxoqpgq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163nqcpgjfh.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163reqlrswe.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163odwkximc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vfaqmesc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hekvomeh.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163stpvzfwb.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163xrilklqv.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163twastdbl.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163sndthrhr.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163emjryohz.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mukknyeh.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ypdptfly.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nwwtrske.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163yrxdwwno.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163vxgpgoel.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mhonbert.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hartfsae.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zjgwnnec.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163chrwacyy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163smhbqvru.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163tmcsjcig.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163mruxaxiv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163lywocjmi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mxaambka.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xfmrzeuo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jiqzbhic.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ppqevrqr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163lrgspfww.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vdqjsnft.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xhaojyxu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hvcwbocf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163grwgfkyz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bvqvomct.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163xpkqrsld.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163fwgqwjvl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zkpnuyrv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163xnfkwldv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163oyfctxyz.html

TS:   // 同上
来源：http://www.sxryk.cn/163rhaflxcv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163cwrktonr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jdruiajm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163obisdfei.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rsfgkkpp.html

================================================================================
来源：http://www.sxryk.cn/163dgnoolkh.html

G. 面向对象
来源：http://www.sxryk.cn/163iatktpeb.html

================================================================================
来源：http://www.aibaodan.cn/163ohalholc.html

[G01] 定义类
来源：http://www.sxryk.cn/163uappfkor.html

Py:   class User: pass
来源：http://www.sxryk.cn/163fjtqhoxc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jbrcksos.html

JS:   class User {}
来源：http://www.aibaodan.cn/163xojwpvhl.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jmzcxfqq.html

Java: class User {}
来源：http://www.aibaodan.cn/163vnrdfkia.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163qeqexvon.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163wiopqksk.html

C#:   class User {}
来源：http://www.sxryk.cn/163uvbocbmw.html

[G02] 构造函数
来源：http://www.xuanzx.com/163sgybmpwx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dsgzijkf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163whefrmqe.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163jqhzhvta.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163vduowcwt.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163agaxikzk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163prtacsel.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fabtodku.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rdlfgvrx.html

[G03] 实例属性
来源：http://www.sxryk.cn/163drvehujr.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163csorudvp.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163lqazsidz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163rdztwblp.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163pamygmgp.html

Java: private String name;
来源：http://www.xuanzx.com/163ennhqnau.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163rqkoomsc.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ammycaee.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163coootqjw.html

[G04] 定义方法
来源：http://www.xuanzx.com/163vwgxbodc.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163chlsqmhh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163txfwcara.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163tpysecbi.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ikhnrooi.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163niwzwbly.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163yxmmthtn.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lejhwnem.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163xqhqpadq.html

[G05] 继承
来源：http://www.aibaodan.cn/163jpnbahrg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163edvhvmdm.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163vievgnts.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rnkqmezn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jslqjgnz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163zcaczaip.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163wrthwvqx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163qhbqbzap.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163swzigeps.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ceaocjbj.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163habirkbs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mewilgia.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mdnroukt.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gionqxhc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163gtgjuezc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zizbknmf.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163wkmtzaiu.html


<!-- 参考信息 -->