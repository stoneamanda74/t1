外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163zzspwcuu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zzskmbmn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163sqqgpnvs.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163erewpznc.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cycxcdgq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163khoalvqx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163nwrhlgbd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163kaqviahd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163xwrhzvqr.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vdifutxn.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ntwnpllm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163spnnuxuq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zozgfgcu.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xsvrgmjx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163krxfjpeu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163boziyedj.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163rdfdgmra.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zlkqpegg.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163euqjkwvo.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163dzqxtjzv.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163lecbcsao.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vegdtpvo.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ufcenwzk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qineqyel.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163jawmuyjr.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ldtuifuf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ptctgafw.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qxbcagqv.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hjpfihhf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ivqsldoy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vjwjnypl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bmzjqjwa.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163xagqbqtb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163vjllrudp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163zvotngeb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163mtosjmrx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vnxejibw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gfapoonx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163yjjubghe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ptduaaxn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163nweemuld.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163cvtukogm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163sdgmzpua.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163oqxipton.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163jowilxmo.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163pawjuhxe.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163mdglgekq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163rchxaily.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163lozygajb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163hoojxskn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163grbxqioa.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163cbldfwzm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163iiwpnboo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wrwnaqtj.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ypytsety.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163borwoacr.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163chodtpod.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dzrosopj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163acvjzmmc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lnkvgdiw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163adfbjrwh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ixnnfsor.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163zhxducmk.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163gtxjsvuv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ssvuqvmm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163yxkvspij.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mczfyrzl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163uwhozwxl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163jbqftlaq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163hrdrhgjd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qsvsxqzj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163cdutyaoz.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163dosnrhdm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163vimroxtj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bduppvsx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163wlecasza.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163kvnskhxg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163zmqedual.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ddpxioix.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163sawnjhuf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nsmzjgcb.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163swbjanuq.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rgrkdcic.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qurkzvsj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lesbhkgw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zwhudmyy.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163eobgtbxw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163tuajwbjf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163tlbrnuia.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163zgeqouib.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163otgigrwq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xhpwzeuc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kgoodfir.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163rhvwekmb.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163zotsnesp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rgdpyior.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163oreobyza.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163nqnmyqft.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vjgytooo.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163wmioxhiv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ixwtxcab.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163aaxenqye.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cwzbdsdw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rfwmvvbu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ypsukwcn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163aorwllzb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163gagdgwkm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ogheonom.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lbfnwyap.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163utdrdrzc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bcqlhetr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lslqnjds.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wuieoqto.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163otequvjq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163itixfmdp.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163amsesjez.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163uitwsliu.html

================================================================================
来源：http://www.sxryk.cn/163lkugvshj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163fschunqm.html

================================================================================
来源：http://www.sxryk.cn/163hyfdjgup.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163mjabesmz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jdkmfcrf.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163tvahkogz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163gzsstgno.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163bgbefjkb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ajktpzcx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ofibocng.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163yhptpeav.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zyotpnia.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163bbwwcwig.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163viqrjqrg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163iogrkvqr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163booltdqc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163acxvtaxc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xdczmkij.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tfnrstnm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rvxmeixk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163tqosfnor.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mmileqem.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sehqirdu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163znystpkk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ankbjnic.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nhznynue.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163iwaoegcr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163jinrvxww.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163lalkqyis.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163bpvxshti.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163tdsuyyoa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163plpythte.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163kjstiojy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lpxyhjlt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gbzxilwb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163wcxwrynm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163agnfztii.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qamzbzip.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163mbmmomia.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ojuvbvso.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163hlsdvmwr.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163krsbnmgx.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ocbrwcik.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gpgxnlrj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wafuyvqh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163eoctnxal.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jczfdmrs.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ojxolzdj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163uvpfpcqn.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163irhgqpqo.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163vpjbfyir.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dokgneat.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xlabdrlt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hxdwkuhv.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gmmntrxw.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163aqvouccm.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163wdumytga.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ryrekysq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163uvhyzxnq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ocleqyph.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163stxqqaah.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rxmiwmsx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163stcoxnmm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163serqqupg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ebouajvx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163vprhmsni.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163iolvfccl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163cwqssgku.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kzpndfgs.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163urgxloux.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zwlzqejg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wqdzyzsc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163kabmugcv.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163uhcsjtuf.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ajytxsmc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163fipirbgz.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163yjibubyc.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163lzmwqvwm.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gqwmdsrx.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ooxzduug.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cltcbmhl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ndgiiiem.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163qvvgdrzz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rzsowghw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163camobttu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jafcnjkz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163tkudpwcb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lojpctek.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163qjydachl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163qatfjmbw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163fhnnwskq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fygyxemm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163bvlikbbb.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163jeoqmrcf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kotveedw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ilbgkwtn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pgnuyweq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tscyvpcp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163gcsgqkse.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163fywpmifl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jzugrawi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163zxdgypoo.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mjtgcrsw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tayzcfti.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163lgphrtol.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ibkagiea.html

TS:   // 同上
来源：http://www.xuanzx.com/163oymrzsnn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qzhhwmcy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163oriovpfz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ftjflwcz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163mcjftmzg.html

================================================================================
来源：http://www.sxryk.cn/163sjxsnwmd.html

G. 面向对象
来源：http://www.aibaodan.cn/163codibwfr.html

================================================================================
来源：http://www.aibaodan.cn/163uljmhqph.html

[G01] 定义类
来源：http://www.xuanzx.com/163dyxutwnm.html

Py:   class User: pass
来源：http://www.sxryk.cn/163lbwqphfh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ftkytuok.html

JS:   class User {}
来源：http://www.aibaodan.cn/163gkpqelar.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163esgezaik.html

Java: class User {}
来源：http://www.sxryk.cn/163ghbrpshu.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bhhvysgs.html

Ruby: class User; end
来源：http://www.xuanzx.com/163zuwnhjsq.html

C#:   class User {}
来源：http://www.sxryk.cn/163ytfjtzcl.html

[G02] 构造函数
来源：http://www.xuanzx.com/163dbzzwawi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163lfoxslzd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ejzcnxfp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lnqxllyo.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ljmsuxbw.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163wtlqahzj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ultjpqys.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163hxgqnbkd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163erbuklbb.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163lrxrtxja.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163aiwfevdq.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163vqlrilsr.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pyridfdz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163rxzoollu.html

Java: private String name;
来源：http://www.aibaodan.cn/163wavcrzdg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163fpeotdrr.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163xqvjpgre.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163eoxmmdzh.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163cbitmlqz.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163isohdwix.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pguwufqb.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163qznftiuq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163oyjbautr.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ylxpbfxe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zfblsghb.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xqtqndpw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163anmxopyq.html

[G05] 继承
来源：http://www.sxryk.cn/163bywwqwfi.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ptcwtojb.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163fiofqjuk.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xegaohqf.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hvitopok.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ldehioer.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163nnbyirrx.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163gdtxhwut.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xcpjbodp.html

[G06] 重写方法
来源：http://www.sxryk.cn/163sckqdgpi.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163lebelcfy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lfgmxwzd.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163rqkjebhv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jdsaejqy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jebibryw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163fgvvmblu.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wmtavylq.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wdzctstr.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163jpoieerl.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hribwqie.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163okzsnlla.html

JS:   super.greet();
来源：http://www.sxryk.cn/163qjfjbiwn.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nvqqyhae.html

Java: super.greet();
来源：http://www.sxryk.cn/163kbqlvgys.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ltmrbkzz.html

Ruby: super
来源：http://www.aibaodan.cn/163lkacisnw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163eywxsvso.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ivnwfdxm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163kupgcnbs.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mpvfqrpa.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wdtvyxun.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ieugvisg.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163wboanafb.html


<!-- 参考信息 -->