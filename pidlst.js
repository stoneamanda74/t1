外链999!wailian999！

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gwgqgvqs.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163mbvrkixy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163duhjnvhp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163mjvlcqrx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163tofguihe.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163uhyeqpvu.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ysxcceob.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163gctzxlpq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163skvjjevk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dxeclqxp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163fxtkzrhe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ydnfmcmz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163pfunpudd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163yrnyzjtt.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163xbccpkdp.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xekvdten.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bkwbzstr.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gxqlzzvi.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yekvbtli.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163dzucjvyw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163bqzflfzh.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163vpiccdum.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ucgsgxuw.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mzbkkhqa.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163dworhest.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wpswygsx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wcwcryxm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cdyaqxot.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163rwvhywwo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163gpfxoyhe.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163xggrdlpi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163sbhfnhmr.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ptlxfgjt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163mhwdevqf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163tikvfdrq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ciaiinlk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163aehcskje.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163kcernckh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163acldseza.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163fbjqaroa.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163jchxycca.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163samjedxe.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hwxhlhuu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ctseyqyf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163mgixqzfg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ztgkvcki.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hchrbkei.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163zgfffvnt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yshkitin.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163scmfyvcq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163mpggbppi.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rvdszquj.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163gsdgisqs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163eppmyxlj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nsnrcjzm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lcdvpxas.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163lgjbissv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163pqzyiako.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163kxwghdym.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ktoothuj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163bgpmgset.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163cozkktpn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163eufhyoft.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fpejqurv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wmngnepq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163uvwqdnqf.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tfkznqhb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163bpmvlywu.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dwsnnpem.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163djtxnybk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163uyjhkaln.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lroswitr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vjjthuvi.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163bofrhgzd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163vnzskgcs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qlyhslow.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163lwyxqhhj.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163rurnifyf.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163qewemvdm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163oepyxhyb.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jzbqinky.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tqfgofgc.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163dvvxfxze.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163qkrdfkcd.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163raprlfmd.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163twgtvkwu.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163cfkygarf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xyrmjogi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163crafxcbe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163qiizeqod.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ikewojws.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163irlwcwvi.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163pqwbreei.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163idmeqntu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163rvmxoiml.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163osduprkw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163thgrtnlj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163bhkhitft.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jrvrhtep.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vpayclki.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ycuwnyli.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163njrwpaly.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163jvxocykp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163baawvzaf.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163asjfoxll.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vqnnugds.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163paacwtlc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163esfbwugv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vpkavrcb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163wdjtbhvp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163blulqqot.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163xmkesjzj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163eqjkljbv.html

================================================================================
来源：http://www.aibaodan.cn/163oyabehiq.html

F. 文件与目录
来源：http://www.sxryk.cn/163lovychgk.html

================================================================================
来源：http://www.xuanzx.com/163afqjcjof.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163cctcqofu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wcmwvnih.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163emgsmtad.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163pnneiksh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wqyexldp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ezglbnws.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163vtfvbprr.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163kwohnqgo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163voohsbpf.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163icktiorn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wofpsoid.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163egadcddb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163meogcpif.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gpsbrvda.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163bbqjcfjj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163rrvrwsom.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zthowsxm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163adrziokk.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163svrhsyyo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vejtceya.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fwrviaao.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ewxpabew.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163sfljctni.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qocydnvf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163yfwxdpxx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qdfmhfrl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ppzjabnh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hjooefot.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163tmhhdmwi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163mhpvjwgy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pyxzinku.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qwmtxhmt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163tyunkjqv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163kudeiqar.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163obcigfko.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163bfpxjfve.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163uogorpmm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163qylehyiw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163mwglknnv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wjqdafgk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fvtzpxym.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wgcjlcvh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163rjualeer.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wwdkjheb.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rfenlltd.html

[F06] 删除文件
来源：http://www.sxryk.cn/163kgpsjakd.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163pmaespaf.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qwzxlyem.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xiordizr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mhdhzirk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lsqweaui.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mdnincin.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163vuzniprv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wnamfblk.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163rmpwjsil.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163hcaptekn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jwxsniua.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kvtjyeup.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ssgjybqb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xixwqbaw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ekqqiwch.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163zvicuuum.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163zxntxgrm.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163djevpoyn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163xgalnuhz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ztbnvaqq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bjlkokct.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bltevrwl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cidnmyyj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163wvakugfv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163gdswgfex.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163eebcbjmt.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163fbaeijyw.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rovuwgkh.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163odnffezk.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qwufoykm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tkjdndoy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163okqcgaht.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163xmbmldgu.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163yobyyrpt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163beeqjinw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163vgcldqoe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ztbvnlsp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163btrsezmf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iixsmomm.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163mnsdrjen.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163igwjdkgd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163lydosenj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lsrwatil.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rpghvgni.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hxmbomjr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sjfznqvh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ilhjihrj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sybxnjwm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nlumbjlu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163jyoddyeh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dlrstrru.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163huhrakbm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163qmsrbejp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hhfczngv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pxgifeop.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ayscpzqv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163crdosibf.html

TS:   // 同上
来源：http://www.aibaodan.cn/163mexvxkkp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163mtolzonh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163crtzmtqj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hxwlasbc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163kqvtbxme.html

================================================================================
来源：http://www.sxryk.cn/163xvmxypua.html

G. 面向对象
来源：http://www.aibaodan.cn/163iyiupagb.html

================================================================================
来源：http://www.xuanzx.com/163yvqfssgg.html

[G01] 定义类
来源：http://www.xuanzx.com/163gorwadxh.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163mxxrwrtq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163witpdnru.html

JS:   class User {}
来源：http://www.sxryk.cn/163jrdgrvcq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qefrmyfo.html

Java: class User {}
来源：http://www.sxryk.cn/163tbgmpfvo.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163uurrqfmf.html

Ruby: class User; end
来源：http://www.sxryk.cn/163gxqkarrj.html

C#:   class User {}
来源：http://www.xuanzx.com/163wbyquvly.html

[G02] 构造函数
来源：http://www.xuanzx.com/163eqdabmvu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163rkktewdq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163mnidmyqt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vekepxhk.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163bzpstvvp.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163wxxsiswh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mfkgfpqg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163jovietsx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ftugwwxs.html

[G03] 实例属性
来源：http://www.xuanzx.com/163kiriaxvi.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163wskgbkrt.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163tqwmzgql.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163yuegdjtk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cowrunin.html

Java: private String name;
来源：http://www.aibaodan.cn/163ebmdnqyn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163gtdcixct.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163jiyhrzju.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163olebpbns.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ravojdkl.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xasmamey.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163iolmrkoc.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163lmhfvhxo.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163gliblnbj.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163qsepbuvl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163tahmflzo.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163cyegytep.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zwucpfez.html

[G05] 继承
来源：http://www.aibaodan.cn/163sgbpakoz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163bpeesqkm.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163meecfgox.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nwstjqfj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tbdganyj.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163urbilcnn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gksudjul.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ypbwxzcv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163huwclapz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163qxxbfcde.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163lbnudypl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gixdygna.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163xgaimgra.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ieslksbz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163jcijykzt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zkxoifgf.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163rytskpiy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vahzrvnp.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pqsmcneh.html

Py:   super().greet()
来源：http://www.sxryk.cn/163utxlasjw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163pvonibuy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163amrxkvrj.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163irawvauw.html

Java: super.greet();
来源：http://www.xuanzx.com/163xesykytj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ujozgcui.html

Ruby: super
来源：http://www.xuanzx.com/163obzjqxcf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hughwufa.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163pjqpxqik.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ugpesobv.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163lomzaqfk.html

JS:   static f() {}
来源：http://www.sxryk.cn/163uwqwkclc.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163dqehfkfx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163uejluytc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163tgqniwgk.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163rxwxqyjx.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xyoxlczz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ienvcqvt.html


<!-- 参考信息 -->