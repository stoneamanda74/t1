外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163qhinmryb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163acvtaucs.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163fablecky.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163dtrnfgaa.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163rstcmqea.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163amsbvvou.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ibkgqaox.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tvjbyygm.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163hvttfmds.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163vvpeejre.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163sbocdzbr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163uypwfuij.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jtmqeiro.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rkfxohht.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jfizkdnr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163llyvjdrs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163epajadcm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163iunkxuhn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163mpnttxpl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tuyfnble.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163xsatzjcl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163tqwibgyz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163pxrexmlc.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nfdbigap.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163eceirfhh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ulxjukeu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163qlurmysw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163kqfhsosc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163wumvrsvg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qqegxekk.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163pzyfitvm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163maeesily.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jerfoddb.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163msizsgev.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163qxspbbgn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163gkreyhhj.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ccnonhow.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cgitnhqm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163omdmhqgk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163uvagkezn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vqstrrby.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nlfzdwiz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163byzdmtvt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163qtrlbcqc.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163iasfejwz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ekzsdesl.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qtoiwjdj.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ivoveykm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kvnbiibl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163kpyhufpx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uumidztk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dpayieif.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163epbfrbwd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ycuvkvai.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163njotgemn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163iztbeugw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163zogvaiow.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ukemoylw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163dfvotqvu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ivjjdzxt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163iftxeesl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wwvhznac.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rymcfyvy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163kksybddv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qpqqemxz.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163bdqnkmid.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lujgbjsh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163qcawjsuw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163inbavjtr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ohnkqwhu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xieuwhdr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rwzlduqk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163hmhwrtva.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163oyrtoiye.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163adswwrvc.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163vrvhrqut.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163sodlzstt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ayzsearo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jmbuiktl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ttcjpkkv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163sviutsbx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163mayjyhms.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163kmwgswot.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163gwaommwq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163uozqfzxy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lflzypas.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163imoenggj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iifmkhkm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163yrxllrgu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rhtelmwj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163nyuovzqr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163paaayyev.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163dmsupgqb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jjgqscth.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vdttqoxr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ojlvfjcp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163kuqbeluu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163orrlkmaj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163caoutfso.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163eenmcjob.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163jeeuifra.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163cuifwfwt.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163vibtcslk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163lmhvevug.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163iwqblskf.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fhsqxyuh.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163fdzkxvik.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163flodobsg.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163bmpiokuz.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163rprruzho.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hrukipxm.html

Py:   if not s:
来源：http://www.xuanzx.com/163vtpupavu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163izluiiky.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163bmuqphpt.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163njxciwty.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163cdfteyco.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ejlhzswh.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163hauvycst.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163rydcguzv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163poimsquh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163nmwwbkcq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163qgzwjwmx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ppxesylw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163grqntcks.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nujpeojm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163tjlhtsuy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163pifggfmc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163qcjwazwg.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163lptckohj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163uoweovqz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hgsgrkmf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bpyqimwe.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vcblfnur.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163riydpkvw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jdiwanmy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163hahlazdk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163awpurkzy.html

================================================================================
来源：http://www.aibaodan.cn/163uqzqoijk.html

F. 文件与目录
来源：http://www.aibaodan.cn/163agwojqjd.html

================================================================================
来源：http://www.sxryk.cn/163lvjwcjbl.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163enaiahsu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163jqpoiukm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ibqwpefa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163oqvissqb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163wdqvjnsn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163plcktvyj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163rrezutmq.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163nxxwynkb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qlljnmaj.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ohdvwslg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163sznhixoi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mntgglpa.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bbuhsbaa.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xsmwdcvv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dgcindkv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163hssaijri.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nftfqjag.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ziumannz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163dvxrsipy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163gkwxuqas.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163rcwiezpf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163twmebezq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qolyhsqx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163keetpwrg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163pyvomdvh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ptscmivi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qkeymdyq.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lmhfmtha.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163lvhjvmdr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163avvbzqik.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ftwxfuca.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163alxaleus.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163nzvfghwm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163bjpnrvsy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jtjertqk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163qmhxkuiy.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ftrghyrg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163zothebcb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zxwqjxfj.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ujztfmot.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ljcciaiw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rnrcpnhs.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163fxugudbw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163yastcppe.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163rejspcvt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163zamgkjyv.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163inrbxoqy.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163jkjvwkqu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xcxgfjzz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vhuukywx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dyfiuadt.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ouviwejw.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yyhhtxpa.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jstovanz.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163rizrsove.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ceulloru.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163zppxrwlx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163llefezcy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lmamvpvg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163optoqgqg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gqlxlkwl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rlcbeyci.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163frmftfxd.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163prwaikiv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163wmqrbqnu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kgvomdta.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pktuswbv.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mzwvqqvw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gwdkfzcb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vnqfuypy.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163jzkdvpyx.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dhjjwkdo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163qusgsqzt.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163qthhqcoa.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163nnxfmome.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qhistjmg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vippfitj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lkdykgqf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163sioefcbm.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ufrgosui.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ldirehgs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163uiatlbpp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163eadhpjtn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163axyoqgxg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163liufnzlh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163wysoghnx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163gfjuadjt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163qiieluvc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163agwydszt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163wyabkten.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163jfnotcsy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jjqovlix.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bgtrxorc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hnnmqdsf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iaoocdwx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163biflqrhg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163pkalcwgj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ujheojtt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wrfylvyq.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163gsqjwjbv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ojaogdll.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163sueegqik.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163irjvyuuf.html

TS:   // 同上
来源：http://www.sxryk.cn/163uskzuige.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163nmzzqfap.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fqvelgvr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163uljgqjsn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ipskrccy.html

================================================================================
来源：http://www.aibaodan.cn/163vnchcdyn.html

G. 面向对象
来源：http://www.aibaodan.cn/163vpsakidg.html

================================================================================
来源：http://www.sxryk.cn/163jcvokcfl.html

[G01] 定义类
来源：http://www.sxryk.cn/163lxwccfky.html

Py:   class User: pass
来源：http://www.sxryk.cn/163osmvxjtm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163pbbnmrsq.html

JS:   class User {}
来源：http://www.xuanzx.com/163ohgtcgse.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163dclyutyc.html

Java: class User {}
来源：http://www.sxryk.cn/163vjrnbtiv.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163zqipeovw.html

Ruby: class User; end
来源：http://www.sxryk.cn/163gxcszljm.html

C#:   class User {}
来源：http://www.xuanzx.com/163syhcerif.html

[G02] 构造函数
来源：http://www.xuanzx.com/163pypyhosw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qvogkspi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163mjdlngrv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163hwxzxpoc.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163bodbpdww.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163oylnhagn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163efwwceej.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xppvcink.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163kzrlubur.html

[G03] 实例属性
来源：http://www.xuanzx.com/163fpykeeud.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163adtpndyz.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163lhbaqyza.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163blxdsadr.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163sutjdzoy.html

Java: private String name;
来源：http://www.sxryk.cn/163idrpwmax.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163npffkpyd.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163rbemitkh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163mqjursfo.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163gqnbqcht.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jjmunvko.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ozdfmsgy.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163smkvoatm.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163mzwsfdok.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163guavlafe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ygwduamc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gyxngfot.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163wwdrmjzu.html

[G05] 继承
来源：http://www.aibaodan.cn/163jvkspzgs.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vdwiqtja.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163autyowpg.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163teojrnuy.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fftljmpc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163tfonroyb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jdmkdjpl.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ylylbqua.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163rbcvncbr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vtrlgrtc.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xwihukgm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qykfudwa.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163dpjkpmue.html


<!-- 参考信息 -->