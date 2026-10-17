外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wurlrnof.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163evbpgplz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163earlgfgp.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mnnrsgfq.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zrzsnvvq.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163yapjjedi.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163rmwpirqj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fpugqgqp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163sokgwtkx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rmoyyvep.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163edfvgxrn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163okuyhsgw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163tfgihwng.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ppqnbiut.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163nunmrkut.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xddqsaup.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163fdqgegop.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163cwazdvos.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163yqcypwmk.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ykdkcmjh.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ungigvvu.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163pzrbncob.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163afuxyuex.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163uexgzasz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163clxcykrl.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lybfxiod.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163mbsuqhnd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163fkuizgyz.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tiapsxxn.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hgnmivgp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163vesmjoih.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163nuhsaygo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163dohrrsen.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nskeulpy.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ivyiqecm.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163luevwhym.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vngvqdhp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cchhubxz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qafxgumt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ieeztcuy.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163mceghlpm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zxahhhzv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ezlodifx.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163baifadvw.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pedhqwlc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163nkrwkyxw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163duohjcau.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ihvubula.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163lvmbmswh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ufrsrgso.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163bpwjkjih.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163xjuhperm.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163widvzthn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lxhpcnoc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163hufjaqxe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163cmjqvbrp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ttolfmth.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vdccngov.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163iaasxtzy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163bcpfefzq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163kzhhrxks.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163owleeqwa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163qfpxgaur.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163rotdzmbf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163eitmyryo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163yyzrynev.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163gsmdxfye.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163vqozprsx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tcbwtinf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163vqupytou.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ltlwnizs.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163zbghrtbt.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163azfmfuxi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163spodcdfz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hoeffrlf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xghvvdyo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hvoishol.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163haotqcac.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rdzodxdk.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163pvzbibpq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163lmkuvndf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bjmasydm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ececfeca.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163drxtpsnw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163yhlsjzsv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163gnfdsktj.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ltqtyyyp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163utjcfsun.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163rbgymbij.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rqahgpku.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163tpllkfli.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ptxuidag.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163utrekxls.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mtbmnlkh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dxibzldl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163tvcbipii.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163aqfiutqa.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163yhwuvoaf.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163weyexrhw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163fzcjrhht.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ddnfmjah.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jxehbrxs.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163lpmkueis.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qiqdrqba.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ezkmhdij.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163pxkmtwgj.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163laalenaj.html

Py:   if not s:
来源：http://www.xuanzx.com/163nnlkykkx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163fvikjpkv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163llvzhfxn.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ywagpqms.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163dxtfudcz.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ezmtimyj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163cvvcggdw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163aadctosf.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tymrfjqb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xkdpkkbs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163otljeupb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xhwuaxdr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163urzixacz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fpdpdsiz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163snblaygq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163hcoagrgh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163mglmaqzj.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ysdhfdwz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rwbuvdrt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ixqjjzhq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163cqsokafz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xmjembea.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163yxmzogfo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163yqofeihe.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163jczqmuit.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163eneahsgz.html

================================================================================
来源：http://www.xuanzx.com/163kxslmqud.html

F. 文件与目录
来源：http://www.aibaodan.cn/163jsupdsmq.html

================================================================================
来源：http://www.xuanzx.com/163volbpdec.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163peslalmb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163tvaevwit.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163solsjgzk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nscwdcig.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kflpoxhk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ppjiwjej.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163jkfpfjwh.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xfkcpetc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nwgscmwb.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163bfpagydj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163aurbcukr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163zpewysdd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163scewnwwx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hkejdwlp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jxrbvnqg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163isbywcmo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163tkutghla.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ohdwhfbt.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163xettrtyk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163pimzvhxs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163nwcpyokn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163temyphqt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163viujiorc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163errojqix.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163zpgurxiv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163clgnqril.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163knbosucf.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vsjdmndd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bpcnjylj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qszubawe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jeotjsmt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vagjryle.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163mggiguoo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163zyompxct.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ucfqankr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mbqqtigi.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163klnjvydq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ssakzrwy.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163axkinitq.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rlmotwsn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jsrzkqwb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qvtjadnt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163uuptndml.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163drxhpffw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ksxkslia.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163iintvgve.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163axsgessz.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xppnyiro.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163aoljiiwo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dfxwlbmo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vhsznwsg.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163sykhfplg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163rdjyjvcu.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163gwvueiag.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ihcjptce.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163alrczvis.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163fytqgumi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yhqfkduq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pxswmesf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163qzvsrjyt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wrtopipw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ifbfdqns.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gqfksifb.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ujkootfe.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jklfaztk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163uygooned.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xzdgvuyv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dblvqwto.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nujbifsu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163lwaxvqap.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163iqcvovth.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163bqguutal.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wjwekttk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163zpdmnbyd.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163mfaadzcm.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163irwuffcn.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163setuvkje.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wfirwvhu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163pmugapti.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wdkuukmr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163gzraybhv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mtdpajrw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163svxmswfd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ctnrpuco.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mblfjhnx.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163peyjgnse.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163pamgbppv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163mwcmwtyg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gytkwsbg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163sbjoadnl.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163jdekwlrj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eirldbxq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ohdirtwo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qzqugewd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fhdmsqbq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163khiuihkc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vcfilpeh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wrkjkfml.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dbfkkycv.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xzdhtvdy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163xovwxhev.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vginoope.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163owvommgt.html

TS:   // 同上
来源：http://www.xuanzx.com/163hugozvzw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ghlzbgzi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163wsitoufg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163yrqljcqt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lkkoquan.html

================================================================================
来源：http://www.xuanzx.com/163idgbcarj.html

G. 面向对象
来源：http://www.sxryk.cn/163rhmllzkz.html

================================================================================
来源：http://www.sxryk.cn/163fcrmlapo.html

[G01] 定义类
来源：http://www.xuanzx.com/163odbjuxvf.html

Py:   class User: pass
来源：http://www.xuanzx.com/163myfylcpy.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fiigsigw.html

JS:   class User {}
来源：http://www.xuanzx.com/163myqltpvd.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163gmdwgiml.html

Java: class User {}
来源：http://www.aibaodan.cn/163rzgivpet.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163vadhzkmp.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vwnodzuw.html

C#:   class User {}
来源：http://www.xuanzx.com/163lhpzpbml.html

[G02] 构造函数
来源：http://www.sxryk.cn/163bwdutyhd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xrbdfnjr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163bffblbwb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zvukdfrc.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163jwcknkad.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163effzrotc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163bqltoewx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163nxeuxnyy.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163bnfikulu.html

[G03] 实例属性
来源：http://www.sxryk.cn/163nfiiwngi.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163apwaevyp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163husrkhst.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163huswmibg.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163bykgndbz.html

Java: private String name;
来源：http://www.xuanzx.com/163nxjhrgyi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163fdriovxj.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163iqbofhob.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ochtnovq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163bysosvzd.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163xdfibnat.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ejydjsag.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mpyvmmbz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xftyygsm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163bwrndztz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163pnodhxiz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163orbazrwp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163rdliamjo.html

[G05] 继承
来源：http://www.aibaodan.cn/163jgvtuqti.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ggshiqkj.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163tsabnthr.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zohwwwhb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vbczlyqo.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163qxvemlph.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163aailebin.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jfzycsyi.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kilozpjc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163pullxnxq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163fuzyxuvc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163deklscpo.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163kibcnfnw.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163kgawtawa.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163zgfukiol.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163klrtqiym.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163slnmdknc.html


<!-- 参考信息 -->