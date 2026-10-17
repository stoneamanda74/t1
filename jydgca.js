外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jkvdmiuv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163thmjeluz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sxdzactf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wjuswpap.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163weirmqgt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163spyqrpnn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163znosqyzy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wznzchmb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ilmmyqdx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163lqncgqnk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163kcylrzfy.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fpuriktp.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nzxxkrrt.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163znibzbav.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ioejhcqo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163silaacpx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163hgmsmrfh.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163isqibfgu.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163caecayaj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163lrpnrgis.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nrfbmggx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163eigadxul.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163shonxpfz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163afulgxsq.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wbnrrdre.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gvhriznb.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ehtulzno.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163kfftrvob.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163aoeiclqh.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163edwyhlrv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vcygwckb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gqyeenqs.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xwoumlmj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pudqfrvm.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fpsyqhut.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rolpevto.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163yurwawut.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163jwnhxoje.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xnasipxy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zshzpeye.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hajmjmpq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163afsazcgk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163yxxvptzj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ffeoouan.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163yinhxhkh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163jlieusby.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vvsralwo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163dpyethzl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163gvitafhy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jqyngxdm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bigmvfou.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163aeucvown.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163veiujihz.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163owszozws.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163exejjoxa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fjttbhhb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163skxjcefm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dqwgxtss.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wbgoxhuz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163uitxcrun.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163arhjttpt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163wzqarbpr.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163nnpqaqgy.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163nqgxlffz.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bllknreh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vlmgaele.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fnndwlim.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163trkzfxdh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163yvqywefu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163dsktvzqx.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xppuvtif.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163qlhwmddl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163geyooppn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163evadhymt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vwzucrnw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ezareobk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163munjymqa.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163keqglgbm.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163afdtqfvy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163fvrpxooy.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zyebilmc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jppmsdex.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163fmlyzliq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ewdcjfyo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ihbepadh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163hmhpxctw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163zljsuzzw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163rayyyrrl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dcbosajw.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163dupuokbt.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163jmuhaqhp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163kyilmpcn.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tpkjnxbz.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163plmapiua.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163sfrpyvij.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ydlhlkmi.html

Ruby: s.lines
来源：http://www.sxryk.cn/163yvrcjgef.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163kusbrcdc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ubcjhgvu.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rwdvctoc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163lvhpwaoa.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163dwryrinc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163hvyfqtxi.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jtqhwvxt.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ekqeuqwo.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163nnbdutsu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163pmnxgmhx.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jgeunvxl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163zyvzgkec.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163wqszypcb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lddbcedv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dlrcfghq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kdjieapw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163adraubut.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163mmkvqvqy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163aevobczr.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bcrnvynk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163vmnceqaf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sfvijiax.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163teybmysx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iuxxazpq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163yzrduccv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163avuprtlk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163qogwjmcf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163khbinnid.html

================================================================================
来源：http://www.xuanzx.com/163pplwgiut.html

F. 文件与目录
来源：http://www.xuanzx.com/163kgxqqikb.html

================================================================================
来源：http://www.sxryk.cn/163jgbzxggz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163changwmq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163poqrjilh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jgitrnjj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163bewqzrlc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163pptlzale.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mcsefyfn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163fjwknama.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163cqbsxkqv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163yvtmqxtq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163iayydlta.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163bpcjfncc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163etvvnmuy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qtfmvbxk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lvcjuuof.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kvxkiiep.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ayiymtys.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rfhmpsqs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ibbxpffe.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163nalrosix.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163giikawph.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163omjlfysp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jsfkvemn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jdsdovgc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163jpwypdgm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163gsmkooqo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163kucwihri.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yjagdnrc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kgxdfvhk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163nqhmutox.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ochcxkhi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nkzkbray.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ynyrieep.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163oeurhvsv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163sgavyqqb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163tiiprska.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kwcjqifw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163gtqfcidl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163rmaxddbs.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163vxippiyk.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ycagyvsx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jvcgkoju.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nvymoapp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kygwvttx.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163fgepvczz.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163elecwbyl.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ebaqkhbz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163cfhsdakn.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163soytghjs.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163eedgdchk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hjdbgzuq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zffqdmab.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163rqhqyxdy.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163extxhtbh.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163gyqnwcmu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163nuixgsgf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163qtygiypj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163yokzwfip.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tpwrmrur.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ycpypppz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gftfktuz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vpztttel.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163bplpyabb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zgbrpudy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163kffifmhe.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rpsoface.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vedsudkl.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nnaohgas.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cbclcbae.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fzozvphv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163baclkzqr.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bradftvq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163vboknerf.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ibmpbfnf.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163fnkrczpz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163erraqoqu.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gdgecajx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lohrwxdm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jnjnzuhu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163sbexhzee.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163cxziypwj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163pzgkdypz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163kwafpdeq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fexfgekr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163sgwsddwm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hvdbkaxv.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ecjbzoqy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163qannnphd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ohjmhzjt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163grdigskx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163gjxuzgmy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163mchgaawy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ymolhyja.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163pvxwubfh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bfviribm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rvbpkgez.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dxjxzyjc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163yfpngylh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nomozemn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163bqkcsxay.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163bkkenqpa.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163yztiemrr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ntkpmscj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163sserfjew.html

TS:   // 同上
来源：http://www.sxryk.cn/163rbcsvvcs.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rntdzjes.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163epecsvtg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163gxmtiqcm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wxedvuid.html

================================================================================
来源：http://www.aibaodan.cn/163zjdaeiwm.html

G. 面向对象
来源：http://www.sxryk.cn/163wthmffxo.html

================================================================================
来源：http://www.sxryk.cn/163facmmgjs.html

[G01] 定义类
来源：http://www.xuanzx.com/163qaskifwf.html

Py:   class User: pass
来源：http://www.xuanzx.com/163mxxalxpi.html

PHP:  class User {}
来源：http://www.xuanzx.com/163rxbnkmua.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rcamobzq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163uxdhthcu.html

Java: class User {}
来源：http://www.aibaodan.cn/163sbyjjyxs.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163wwbreskv.html

Ruby: class User; end
来源：http://www.xuanzx.com/163jipojojd.html

C#:   class User {}
来源：http://www.aibaodan.cn/163qlfkperj.html

[G02] 构造函数
来源：http://www.xuanzx.com/163dogcapwc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vsuccrka.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163furmvzjy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163amzrdnga.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kmguggxd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163rmxzmitv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fwhjddqr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163nyxxkwxg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163iankkowp.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163osekbomq.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163whqdlnlh.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kyoqmzdg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163xvbnjcjf.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163dufhujbi.html

Java: private String name;
来源：http://www.xuanzx.com/163bdndqkqh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163oxwewlpk.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163wbuirvrr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163usyhoskz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rdcljids.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163myqrmhyb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163lwuahqfs.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vqzeybwc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163bjriygzn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ymflmkml.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163srtnjqmp.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163yxtvqlom.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163stpqqedd.html

[G05] 继承
来源：http://www.aibaodan.cn/163uafuvypc.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hdwswpda.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163lrzzaxze.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fsugnddn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tpgzoyqx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163empdyalv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hlolbhuq.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163rwsilego.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163moneuskc.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163emzjanqf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163lvbivqdy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ehvtmonb.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163gxmqvsft.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163stcuxuav.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163avojybja.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rkwdzmlb.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163iammrwzq.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163sppdvapw.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163wsmfxvsc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ivnjuxzo.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163yfybvoqb.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163fxplsfqq.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ulyykzxg.html

Java: super.greet();
来源：http://www.xuanzx.com/163exrhpuwd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xdqelknf.html


<!-- 参考信息 -->