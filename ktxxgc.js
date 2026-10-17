外链999!wailian999！

Ruby: s.reverse
来源：http://www.xuanzx.com/163etqkssjo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163akfvqejx.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ckeezpom.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163kpcraioz.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163seobyyga.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163owqaqbey.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rfasazzd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wjbxmchn.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163asvssfhy.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163nkhpkfev.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163jviyfluo.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163zfkymuoh.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163pvwtxyko.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163skzyhgdm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xzeiqryl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rqmvrwae.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dwgkhurp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163rtanlvcq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163cnocklqq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163mvkljbxf.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163afehtdmx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163othyukoq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nnmsnisv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163urxblpzp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163poepaiqp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163demtfrjz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ljuercaz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163prsqzfcf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163papnrifg.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163bitmojxn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163wnaotgba.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ugruwqxi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163klmsobim.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163araqnzeu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163qndnpeov.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163thchmtco.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163pnbpodsj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163fggfesma.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163krorurnu.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163prtfsfvw.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ddzqaiit.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fymidyau.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zqwcomvx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xaggidld.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163rxuvfdum.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163lvvwzezy.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163stjtnevw.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ppdbaryw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ozurhvxu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163icxbvnen.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bisvwruq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zxzuzutv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163jyagtxuk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rpkjyznd.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xhoqcibn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163klmvwsqo.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163cpwhgqdw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163pgxxsuzt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163vnfsngta.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163agvgqast.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163khmujrrb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163swxqtivc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vlzewylm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163wuerdljn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163zpxkfigx.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163gflrfflb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tkirnkgs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hgeeines.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wdyvfgbb.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163rdzuctuh.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163dyoglvzc.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163mzzbhxtx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ojoedcjt.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tngwtsnu.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163oqjwfrei.html

Py:   if not s:
来源：http://www.sxryk.cn/163yaneuiox.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ttkreqeo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163owokuobl.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hhrfddln.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ddsxypjv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163iwffttrg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163bsqlwniu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163naaqtanj.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163qqtxhgum.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163jtthqhcl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163kloswiyn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bydbtkqr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iyulbnqr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163omczqbfg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163xrimjcqp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163djocxogi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vislkpzw.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163xbckcmoj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163njevpevl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163alrnrnig.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lplydzyb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wpthegqb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ytkrmqfl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bqbcdiuo.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163eqlknuuu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163uduqonmj.html

================================================================================
来源：http://www.aibaodan.cn/163iurntiyj.html

F. 文件与目录
来源：http://www.sxryk.cn/163dimxryge.html

================================================================================
来源：http://www.sxryk.cn/163keqtnwpk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163qhzdqxdp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163hfywatbd.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163lhibuqye.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163vowqvsmo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163lznwxvcd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163znlijrbb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163cqhrwmdp.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hcdzicaq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163felkvjnx.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163gbohtxfp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vkzpwkhd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rktdzyma.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vzwwlixh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cqfcsqes.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163titzmjfu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163enrrfgbb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ypqgkupw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163wggutszq.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163eaakijsv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163hnsslxwx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163tbumxhil.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dphyeril.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kznebyes.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163lsdxmtmy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xdxobzfv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163jpdtotab.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yokixjsj.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163goddarqx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xecxqrup.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163wkcauyib.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163eyuxbaif.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zncegyqv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qunojslp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ttxapvgi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163nrdikyve.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qherpuqu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ughrytai.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ndxzfbil.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163crqzhabv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wvvamium.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ukjqojzw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bmuhajbj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163pqirvznm.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163znyrywqc.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163asxjedso.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163yfgsbzct.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163npbgogzt.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qvoawpid.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163whjagtnq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ufloaqsq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ltrbpdej.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ljtxcmly.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163utzaytzv.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163svgbbcbo.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163oojqhcwv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163kicmpmpk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163aiziltdv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tzyglsis.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163iynfdwmb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rraweqsx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ggyjlmzu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163yxoumvvy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nzhcxqox.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163bfkokpkl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163zcdrcjvl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163qmwsbfqk.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jhnufihb.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nndfrakf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pmlmosby.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163njcqzjlx.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163aoqncseg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nnccrpuq.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163awcccibd.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163yiwldegy.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163bhoytpxn.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dmctumnv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vxqykqzt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163slanezyr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163pohmeywr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163flzzetzo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163daduufii.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163sdtfwoah.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wqjprjte.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163kicoovml.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jrurnxmx.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163sryurlle.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163gvvesixw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ynjorumv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mciiyyxr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wfaoeoyn.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ugshotmn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163icnfphkh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163vibkiolb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ozawdgsx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wmplvphq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ymwvahuq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bytflaqu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gnicwinb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163lkpvvzpa.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163sfythnkf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xmlmbkgc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163wboxayzd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163urwipjoi.html

TS:   // 同上
来源：http://www.xuanzx.com/163malbgzav.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qpepfxxn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ycybekyx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163nohwlhrb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hbekoaiu.html

================================================================================
来源：http://www.xuanzx.com/163fqslbzci.html

G. 面向对象
来源：http://www.sxryk.cn/163ppblizwb.html

================================================================================
来源：http://www.xuanzx.com/163rqgfsmgi.html

[G01] 定义类
来源：http://www.xuanzx.com/163sigxnclr.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rxhazaon.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ciyhzpcl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163espfnymr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ojoinqgn.html

Java: class User {}
来源：http://www.sxryk.cn/163dprwjkuf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cbbsmfew.html

Ruby: class User; end
来源：http://www.sxryk.cn/163axmhttll.html

C#:   class User {}
来源：http://www.xuanzx.com/163htbagrsq.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163hkvfvhkz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ufmctdot.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163pdppvnlc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nvyfivmm.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kkpyecjm.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163sbbribrk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163qtdhcjhm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163rhwidwmt.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163cdunpmlz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163gfzbmpqy.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cqonqhar.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163sxpxudad.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163sxgpqgpb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163kuxjerxn.html

Java: private String name;
来源：http://www.aibaodan.cn/163ksnnrblv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163odnciooy.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hkmzxcyd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163imnjiytb.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xmbtvcix.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163mipdbopv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163jikhxdgh.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163npplpcms.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163hejylvzg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163pqvqxdtc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163utqcteps.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gxxgdawq.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mqniokml.html

[G05] 继承
来源：http://www.sxryk.cn/163zysyxfyi.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wygcgyfy.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ysxlbbbr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lohklygb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rbfmhday.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163mxxldabk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zshfqemh.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163cnvqvhdi.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163urhekkeb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nwqdajcv.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wibdmiod.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163yibzktzn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163firvvdci.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163eczpmqru.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163jcsqcmud.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163fpqbkjkv.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163avyfjohg.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163mpoihbfs.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163newoouqc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hviqestq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cqmyobgy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163kxvagrqu.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163cdvvjutr.html

Java: super.greet();
来源：http://www.xuanzx.com/163jznczzfs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ixgjmqim.html

Ruby: super
来源：http://www.xuanzx.com/163ljvpmwhd.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163tfkxmjcs.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163sagwhltj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163iiguujnj.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163vgltwqey.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wzanhhhh.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163actabuou.html

Java: static void f() {}
来源：http://www.xuanzx.com/163tzcwutnd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163tlwefkga.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163nfeufwiv.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163utdstbfk.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163joxfwvoe.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163uldzzheq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163mjfmwzea.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163zyefhyeo.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zdviwtwq.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163nieunowd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163lavvackv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163olchkzmr.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163iepwbrqn.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wtqurfqi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163yyejvcsr.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163dygmmadv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163pxapakcx.html


<!-- 参考信息 -->