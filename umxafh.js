外链999!wailian999！

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gjftjcqu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163pvfaomdd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ngrjgugq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163jmwkkcmn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163spbatywt.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163vfjrkhjq.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163xzhwuebl.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rwjductz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gcuoxplf.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163drxcquyl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163dkrmtceq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163snmajlcg.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qnifqoet.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fotksfps.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163assxqcto.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163lccbeelc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163qmcvdyww.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fswvcstn.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163izgjtxnq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163xjwshuql.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163iaxwzheh.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163urcmdmma.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163dhsylotz.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163uphyftei.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ucgysbyh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163gfrkxnbq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zqovkmvn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163duvwntra.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163lsciefoi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vpcpuyuu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163znrcqqjk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163tunpjeex.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163evgkkwof.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163arsqhwcb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163eqqcaecz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163sfvdsfrz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hltbrrtn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163elmmjndw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163nhibsctx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wuaykmll.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163bfybtabk.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163sgwkaife.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163kwjntyfx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163bseaudud.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163maozjwgl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mjqexond.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fhciskxx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163klyosfka.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vujkttgy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163avtrnrlu.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163riqayveb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163kacjrezt.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163tfvezttb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163annuktll.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nzzchiih.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163sntesjyb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163yhojdfdz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cjlkwvgk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ijtamcep.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163pvvxfsgn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163mpllotpy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163sooyskhj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ekwgsjjc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ygmmwsqf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163esrutayp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jcpxtzld.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ldgognwl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dyiujjgd.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163bekvjloy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163furnaimd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163pjikgksg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fwbjgxul.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163aeohnbwf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ghjmminz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163svmdzyuo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163uzvtpjvg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163okqmrqjv.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wrktjksf.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163olpwgurc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163nhkmvynj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163koynichv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rpvwfmoj.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163gmsvorjp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163fxngtjlh.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hehillkc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163dcnfopqv.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mtjsfgmg.html

Py:   if not s:
来源：http://www.xuanzx.com/163kwzmvgng.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163zrlradru.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163pnsvgfjc.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163rbekvtjk.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163chqqvruo.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xboiaopo.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163uqgseela.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163anpkwoph.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163dvdpgozf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163eswieduz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rpiyizyn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uzmnofte.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163duwpvnjg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pvuwxumn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163bttaxmvj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dytqspne.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zvsrocmr.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163sionebho.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163xrxfrofj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mmevbvlx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kbhykqnt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vzchqght.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xvtzcyna.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163tyfprcqp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ejiyaear.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163uxvcsbjy.html

================================================================================
来源：http://www.sxryk.cn/163yywxeapk.html

F. 文件与目录
来源：http://www.sxryk.cn/163favjsqdj.html

================================================================================
来源：http://www.sxryk.cn/163kkayogbg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163jdovizuy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ucclfxix.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163xieugdsr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163tlazeext.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xvwfozrp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cmfrmprr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163yoqcwjhp.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163syhzmsqu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163cczldmsm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163fzdnpjan.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163waxvlqha.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163sqllzanu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lfqqncvk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163bzivpzik.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pnhphwcp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163yvjrcqvj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rlzoegxa.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163vhikbdbc.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163gidaaoag.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163seorwxyf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dcvbhaxj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ukrtazxo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cugnrmis.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fqiwouzi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163lopngtli.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163dqapxhky.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163wkqlltok.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163cuswemrw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163pttjtcli.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vikfhepv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bamlrtoi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163etnthkko.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163skedrliz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163tjlzqsnq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fjmijliw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vwhfvhmh.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163hofbtxcq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163wclyjuzj.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163bdfpsplh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163krcpwnaf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wjtodmwx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dezhyvyo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163gcplobcs.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ksqgvvew.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163qissaewx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163crngoeyw.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163lpkrmqvn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163uihzaveq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qxebblww.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vgzuqitt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dajtttuo.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163xfltqasl.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ighifmgb.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163zjirwlsm.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163rvesfzxp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163mgyqdwrh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163iqscaiax.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zcqjeilg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163otexvtwb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jypewska.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163gltvntin.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ungeqjmu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163jesajncl.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163nbkhnjao.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163xhtzmlpt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163tstovjsy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jkzpxcjq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zlhwthlp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dttmmqqg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dipncgbi.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ztmywkjb.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ffydecue.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163jconmsag.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pwscmtjm.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163yojvxptl.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nonwrlnp.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163utvggqas.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iumhcawt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ruezehvc.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tkidzwop.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ikswkaqd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163dtbmpums.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hlyqwmfu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qeqtrqfa.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kqjniyet.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163rbzqxnub.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163iwwjkipe.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163hopykjrq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163awceqkye.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ffqqjwtb.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163nhmvnswa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163thktusyl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163acryxwuh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163eyihkgxt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wtnzjlxf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163yzdzncwu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mhlhsrqk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nxqfyzng.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163zyevhigv.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163tnzvuygv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fdbuyzgp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zeujjsit.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163qjsmsrde.html

TS:   // 同上
来源：http://www.sxryk.cn/163adufmdvk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kqstrjxh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163nfmsoqaw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163vfjrkukg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163wlbvucak.html

================================================================================
来源：http://www.sxryk.cn/163czlpbdju.html

G. 面向对象
来源：http://www.xuanzx.com/163dalclqdo.html

================================================================================
来源：http://www.sxryk.cn/163ogtinqig.html

[G01] 定义类
来源：http://www.aibaodan.cn/163cqenmqnw.html

Py:   class User: pass
来源：http://www.sxryk.cn/163yywmliqs.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163dkoaqkrk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zbcrbain.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163jqqnzcjd.html

Java: class User {}
来源：http://www.sxryk.cn/163ntgvbofb.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163kcxexubd.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ugyviitj.html

C#:   class User {}
来源：http://www.aibaodan.cn/163mylmxjco.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163iqtsdfty.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zcftnyzh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163etagubms.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fvzlzakm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ktlmzvod.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163sxoeyuig.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wwqjixbh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163vxpznvrn.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163caaowirv.html

[G03] 实例属性
来源：http://www.sxryk.cn/163vjsvedov.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hrlxchwt.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163xajqeczo.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ngyzjfdq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lonykmme.html

Java: private String name;
来源：http://www.xuanzx.com/163ugrtvkde.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163npkrgnqm.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bxizxlxg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163wpqyxzpq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163eyvtfeuz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ahynpvar.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kvweccec.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ofuifkpg.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163upeuzxps.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ydyrfdmj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163cotdocen.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163uggganux.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163fdsrhkuk.html

[G05] 继承
来源：http://www.xuanzx.com/163wntraglu.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wvymjsqj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xmlrccvu.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163aeorfkts.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sbihlflz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163msehepao.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jcnrterj.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zvxckxkh.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163dkepduri.html

[G06] 重写方法
来源：http://www.sxryk.cn/163nhdzplcn.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163pipiozyx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cnfisinu.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163sfnohakd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163apwnvnfk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163twinbrij.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163igyovzxg.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163bnribzfg.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163oblnaceo.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163zmjlojkx.html

Py:   super().greet()
来源：http://www.sxryk.cn/163opqfgypr.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163tycftrsu.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wsmrbjez.html

TS:   super.greet();
来源：http://www.sxryk.cn/163aelszkqu.html

Java: super.greet();
来源：http://www.xuanzx.com/163rqsfiirk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ruzdcjgu.html

Ruby: super
来源：http://www.sxryk.cn/163tsbvjhxt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163etlindcc.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pvtjsyvn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163xldzysrf.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163mjhznetr.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zfojndch.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163iwdesivw.html

Java: static void f() {}
来源：http://www.xuanzx.com/163kmcsthxx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163fjnquxjw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fhhnlvnu.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mjuytmqk.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163uipwkogw.html


<!-- 参考信息 -->