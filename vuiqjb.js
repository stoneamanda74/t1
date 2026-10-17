外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163pcwkalmc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hokvxjbu.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ajyfvrhz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163nhzejfdm.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163liadkgwa.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163usmgszsi.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xwhefscl.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hipqiyzo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163obynaomv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163syvjerzx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ovhnmcov.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163exesryoo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163vlkronbl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qlrynqbn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zqlccqlu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163gqgwgaky.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163oiljctnh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163mkfeccmd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xygamuhf.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nybaymgw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dzwvixar.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163rezghduv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vcuqrfrj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163atfcplsx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163oeqszaoy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kwdjmigy.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jdrxvcpg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tyyggkgz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163eazgjmrb.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163svwaijrs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163xqeefzij.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qubhpsdf.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163xeqeciqr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vscxsqip.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163atyfvlfe.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163daaavfql.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ybwlvkbv.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163stssplox.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uhnslemd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qpvytlbb.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163skgjacjz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ouahadga.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163swnznxzf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163eqzcwzqt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163fbsonkpz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wusyxyaw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cqmxfvxm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163boeffgfm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jkhagpxn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163iytmlrmr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163iysxmaok.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163oqdpmalf.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dljteqap.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163vqnylkjg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163cviheoll.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163wvxzohmi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ckfbuthw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hmfbhflb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163grmepodi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163igrevtou.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qsgvmsgg.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163anintvfn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163xlppkkah.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163qdkfperv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163oqeesnrv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163svupjcrn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mhxfcihp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wwcqyokx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163zhjficft.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163enguqmna.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163yxrzupjh.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mdjucwyq.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lrldngzs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hjxisdvz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163cqijmbng.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163rjrvrsbh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163plbmwprc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163lokukcbc.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163orbnatzl.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jqphcahm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163swhbfila.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zydbrveo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mjvbuovj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jltzuidm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163upnfvnjl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163wvclcfqf.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163gvxppwxw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kfwjvqnb.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hychnhpj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hjrorapj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163nbhfgxee.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mxtlkwtq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163whheyfkg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wekjlkjy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163hdbrzwjm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xdbzqvel.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163luafatta.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163fpugfaqi.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163lwamefzj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163blwayris.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mebydnon.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163azpqzaqk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qofexcgv.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cnekriil.html

Ruby: s.lines
来源：http://www.sxryk.cn/163hyhnyzsk.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163izraxigx.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163nxqgxpur.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wsdgfdje.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qxeqdvpf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gfyuiriv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wodpijla.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wfmhofyw.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163jcvhfsiw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163kyctsgyh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vvnzosyh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163zzhwvtsm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163paqiyecu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163aeckijmv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dodujtpf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zyjgzvls.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kwpgvjyu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163kbafguoa.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163zsobccku.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163uwqmtodq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bshuludn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163dllkvubm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jxshccoe.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163egznksrj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wcpstmjq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163dbydcgky.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163yfftbxrp.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163zwacrxpe.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163vphrbhvz.html

================================================================================
来源：http://www.sxryk.cn/163wbivoldj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lqlxoisa.html

================================================================================
来源：http://www.sxryk.cn/163gybpbmbe.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pjgnbvtw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163yljvspiw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163qjclcsoc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qqmxklnr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163pywovzzn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rfbvgxys.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zaxaehnd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gtudhwdl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163oiqmxqkv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163lfskyzqh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qbcbdmky.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163wzaeuopk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ggbtechp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nmvsopic.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gmbvqquv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163wtrbhjag.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163nmnjcgeg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163dlijuesj.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163sextouew.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163omzvvvwe.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163mpitjoel.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163icnemexs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ocnmjyak.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163sznvdolp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163tarafwqw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nytnxorw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jrdgpubv.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xdonveeh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163lkwluwmt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ewdkywov.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jtnftmjf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vekgbrcq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ijoraska.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163tbrclhgg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163oezpupui.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163pudlmmib.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163oezrrkqn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163pfjccjkd.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163rpqwhbxw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zqcpjkru.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163utldayib.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ngbdcjnf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163amodbqex.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ioyihpxl.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163wirrxaex.html

[F06] 删除文件
来源：http://www.xuanzx.com/163lbonhgkt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jcrzbcvi.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163heloeygc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yyxqjxws.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163estqynrk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yoggkkfp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163clbhtmlw.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yjptjmqh.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tdhkzems.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163uwhrfdbc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163uluelvcq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163jvcdeicm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vybyopxu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163foxmyxtz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163cpiviikh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163wfkcfppl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ivzeflvc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163bgundpbs.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163eohuwpja.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163bwvlrfgl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163yrtzqtgd.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163apltruig.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163teirhzer.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zinwfukc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163oeqonlyd.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163anqrvkuw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xrrerjlx.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gsuoucrn.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163tomwjkvj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zxrtymww.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163csjxdhqh.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163iajsedgk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ierujdzt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163mwrgaihr.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163yicnluea.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163fbkcemvl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ntrwqphf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163alkeskku.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163gyuntnrl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zngkpzoc.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fbexmgcm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163nspnpidu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zopyxmpd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nmeqzmdo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ifxbvjzm.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163pbqjkrub.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jtxqgkwy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ugvwsdzu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rooecioa.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gxaibmvi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163haaafdkk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163jklsuxah.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163visjyhly.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xpmqksjv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163cuptdqfr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163uimdxiuf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vuvhqwzv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bfubumgw.html

TS:   // 同上
来源：http://www.xuanzx.com/163cinjfzug.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kvjvdzpg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163oezmantj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163kyxrmlfa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ttpajbnv.html

================================================================================
来源：http://www.sxryk.cn/163deosejgz.html

G. 面向对象
来源：http://www.aibaodan.cn/163vzntcckg.html

================================================================================
来源：http://www.sxryk.cn/163itcodlza.html

[G01] 定义类
来源：http://www.sxryk.cn/163pbjknrwq.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163mwsbkgfa.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163zujforzm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163myxvluhm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163skvzxsdc.html

Java: class User {}
来源：http://www.sxryk.cn/163gxxhzdhf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rnzgmheg.html

Ruby: class User; end
来源：http://www.sxryk.cn/163hxrtxuai.html

C#:   class User {}
来源：http://www.sxryk.cn/163ebkpxews.html

[G02] 构造函数
来源：http://www.xuanzx.com/163giyejqxl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qyonfmtc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163cbvrmfuj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qypzexgr.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163sghcmrfv.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163cvsfewpp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163sjyvwvpw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163smwpebbd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163dotqnfck.html

[G03] 实例属性
来源：http://www.xuanzx.com/163lqgnviae.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163llfhngym.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163deelbrhm.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163zhyqdxjs.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163nvgxkbka.html

Java: private String name;
来源：http://www.xuanzx.com/163twwwomlg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jtjxthqn.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163jtvbxusa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jododjcj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163gcvtembs.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wbfannxb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163cxckvhxo.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163grbjopkx.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ybphjkgz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163umgrdvgh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qywrdetc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163segukyvc.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163hlheslik.html

[G05] 继承
来源：http://www.xuanzx.com/163yfjamwbx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163rywyvwul.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163nukdecrb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163uaiazcbf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lulrltzs.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163isewcehc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xtstbnfl.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163dfqsutwq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qvrpprri.html

[G06] 重写方法
来源：http://www.sxryk.cn/163wzxmursi.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163jkgofzoj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dowavhuw.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lkqehcaw.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qmbmgcmg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rsjmflus.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rdlbddgj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163tcwjwogh.html


<!-- 参考信息 -->