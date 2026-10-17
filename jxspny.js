外链999!wailian999！

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163vqjcnrjd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163dgqsmdoh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163oedqermj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163rombooft.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rympojma.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163rtgtlhsv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163chihzrxx.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163olczoemt.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qfvimojm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163mexwdgkd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163yszjwyir.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hveujbqw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163mzekbgyw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163oyeepnin.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163cyvxhjef.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163knzbuphz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xgnpbvpr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ujfghhfo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ggnpxjoe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163bnnawice.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163luaedipe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xabdjxtu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ocmjfevd.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163dovssxnp.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163evdhchkn.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163djxllrbq.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jhupqlmr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163nhjcqwkq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163caeujkdm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wnwvvlql.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163gzypeunv.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163nuivhpkb.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163iyjjvlww.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163xmpzpfri.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nbaetoqe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mamrbnvk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163jaikloxd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qazdhvbq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163hsrnfwvf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163nydppjlf.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163buiepjnk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163zhblqpfa.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163oahbqwqe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163dyidkbcu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163jbkfjegg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163icagfajb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163lwsuuzka.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163mhbplliw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163yllkmvog.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163jvczisaf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163huohjfae.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163yakniohj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163qptpqvex.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163sintcdfx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163uqvlfkwv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163chpavadm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163glglvfvu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163yswjdvcx.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163nujqmhml.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ogawihta.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lfzzwxkr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aqbjmmqx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vhhzrnqe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qupbjvxt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163jnzzdcnc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163uupblslf.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163jgdnfnyk.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ezerjbsc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163nzmekmcl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163edhttshg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163buvcxstf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cgrgmhbh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163qukifgmg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mnjoants.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163laihhdmu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163geovdimy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ryuswaaa.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163frmnckjd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ekwlkjmi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163cnmsgkxk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xblzczdh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ovkjzqwc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ggmzynlc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163pbulqrrw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vfutcjif.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ijtueenu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163lfhyapox.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ylhqanqb.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xonblkkb.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xveksnbq.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163izlwjhhc.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163yyswifng.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nhstvqdo.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163pycjhrxz.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163xzjeqwuz.html

Py:   if not s:
来源：http://www.xuanzx.com/163dyudkhpg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vtbgelwv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163egxpqunh.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163evrziitq.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163rnyzevjj.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163bogtqwlp.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mqanrplj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163kmoatxif.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163fxtdjfxr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163zbpdvjco.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gscjwxeq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ivfgmyxl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qlpmihuo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ukawtooo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ddxedvpm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163nqeeywmc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ytlapjvy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163pqwruuta.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vmegleab.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dykqgbvp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cesnweuf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mkpjfoor.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sxcfxwsg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bklffkpd.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163bggqxmqk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163jmndtdcm.html

================================================================================
来源：http://www.xuanzx.com/163mqqonwwn.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tqggyhgy.html

================================================================================
来源：http://www.sxryk.cn/163neyiisdi.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163gpkcbmsr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ccfxfgyb.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163sebzxlsm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ztvvmogx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163zwwumguc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fozglgov.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163xcbfmltc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163iowmuroz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zavviyke.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jyvhijxj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qfbhrfcd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fakugyaw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mxfmyvht.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163corcvzbb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cqrncozg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qhiyujry.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vaochpco.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163iqcdxvfi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jcowdjaj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163egahuxtr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163tuyrslwo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fbjjymhp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163quqspzzu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163awbdwfai.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163axnnlpih.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163sjmgklib.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ieufsxtu.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163pxgpkilr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rdmsywkg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163dkevcdox.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nyxmhpjj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dhwuskhg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rcxzfnjh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163yaddfbog.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ppmrbjrc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163glrnkcol.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bdcmzhun.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hxclrcbv.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vpkhdbvx.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wbefjiqv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ysvdlpgg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uqrxpoyv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163fdcjtpld.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163emtziimm.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163fkbckvah.html

[F06] 删除文件
来源：http://www.sxryk.cn/163mifcznec.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wepozlgf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163enckqfpj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163khgvevnx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uaexpnzt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bxgcrbtm.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163cfltpgmh.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163uhyhwsjn.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163hcdrciyn.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163mdlrbpkp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163krywbpho.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163zopdprnp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kuwheqvy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wxocajdv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163budizzyk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163faanjnqp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163yitujdwc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163twcxnjqv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ruqfaova.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mnhdoyuh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hbcihcvk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dimqvxip.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163iuubogky.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163metjavba.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163jjxcobvo.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163aoiwrxuk.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163bushzuma.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163oelpvidz.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163mfgkaigw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vaabqqvi.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163htubxifo.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fwqcfnsh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kxbqpnst.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163gcozjnvd.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163fghsveen.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ztfbljlx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163gpokuosg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qxguainq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qoctkzpg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dygsmpcg.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zxcmfqji.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163rmhcndrp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163wmznkhtk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qfpnawbv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163txhnaybl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163bpybtixi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dghdralt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163jameagzu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cpugdjba.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qgvvrbsc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kxvbiysy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ozeinmte.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ygqpabbl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163qhhxzpzr.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ljiniwqb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tvefjizr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hruntclv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ljeftinu.html

TS:   // 同上
来源：http://www.xuanzx.com/163gqmkjwcj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wuchcmww.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163imirvblc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lctjmzib.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163fdzfslzw.html

================================================================================
来源：http://www.aibaodan.cn/163qeopaxhl.html

G. 面向对象
来源：http://www.aibaodan.cn/163ijgdxcic.html

================================================================================
来源：http://www.aibaodan.cn/163nboriuln.html

[G01] 定义类
来源：http://www.sxryk.cn/163kuaaukxk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dmzzjnre.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163axufdmvr.html

JS:   class User {}
来源：http://www.sxryk.cn/163elrusllr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ocpzzqph.html

Java: class User {}
来源：http://www.xuanzx.com/163jbnuynbj.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xkhfpizd.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hbcdzxzu.html

C#:   class User {}
来源：http://www.xuanzx.com/163edoitwwb.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tjeqlaca.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rxxduliu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163qzatwytq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zelsshxv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163rkrnqcjb.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gychlupr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163zdokycps.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fikgwzmk.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163nnkkrewd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ltarbnkc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bjhyksdk.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bevmqxdk.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ctlusyau.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163dwyqpomk.html

Java: private String name;
来源：http://www.sxryk.cn/163wxahcxhb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163khqcbvku.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ahfdhxas.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163mmqwakee.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163amzhiwqp.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jdytybcc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sjbfgbah.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163yajbwhps.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vbaicqnv.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163auxxhosq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zowecznh.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163sigemxhs.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163yneqgvaj.html

[G05] 继承
来源：http://www.xuanzx.com/163qodvvqby.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163mlbxzoxk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cntwmnmv.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sfypgkwk.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mszqwtji.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163mawebpvd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163okdkrevg.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163nqdgynzh.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xrsferob.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xcgatrjd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163izhhpgts.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ftzyrhgf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yagsbcyc.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gaqqhoic.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163igsvnmon.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163brusnaqq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163pifpsoex.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163hegklxbg.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163rwtemlia.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hsczieqv.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mqcvnpqv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163kexeewap.html

TS:   super.greet();
来源：http://www.sxryk.cn/163mnfxuxzv.html

Java: super.greet();
来源：http://www.sxryk.cn/163rgqcgwfg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163rwzziito.html

Ruby: super
来源：http://www.aibaodan.cn/163qvlwvsse.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kudxderr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lmpupexo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163kkakwhfl.html


<!-- 参考信息 -->