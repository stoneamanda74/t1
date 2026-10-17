外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ipueschg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163iruljxdc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jywoextd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xfpgrytc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pdrswrjl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163sjhsfrth.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163qrihrpcx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vwgcjtpa.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163zhqkduqv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ypgaordd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163lbqkkaum.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163afgujggu.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qnkurvqe.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ydjkkutg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163wotyhvqe.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163arglovgp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bjsdjykk.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163swilbmbs.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163sqfxfuxd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163zspaynjh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vbkhwhae.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163komcofmz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ducaqvxt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163yeheqxik.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163mfpqxyir.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xqtjsomo.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163otjttlkj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163dnmbnbcd.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163owielcvu.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cjifhvwo.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yiccbjul.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163unaspsxk.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ukpxvhmg.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163svyjoctk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163luaxzfdp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163cowszaqq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163gczlxpyw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163pgrtclpb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gonjvmog.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dnzaicqf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bocwbeqv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163rfadniop.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163yejmioav.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163xyhltwkw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163yxslgluk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bninyanj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ctjpfiby.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163nfclbexc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ttppjnow.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163kdayvgce.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163fezwqapk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xjpqcvpk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163pdcdhmwh.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163vcxbbsyv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163nqrnouuh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163kmkihftt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163aqszcppz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163vxrwonpk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mfnhoxpv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163vehxryyy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163evzgmvpz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163sfvgupgz.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163xwrbrvmv.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163pdorjphw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163hvmtiese.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zkuudops.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163eoervpcv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163myrpqxme.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163eisolchm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163gqiroieh.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xbvbsjlw.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163wvwhaezc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163prmoxvyh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ywgkzsag.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wbtpnyhk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cuaievta.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163kgonpwlz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163pftplmhi.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163okjltxfm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163kgicxrcc.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qgtjyvmc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163hantlxcd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gsknpdgo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163kwutvnym.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ffacplld.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163crpolirz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163vnkljtxy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163thyzfrnq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jvfjtwdn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ydhdsbiy.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163lvsllwoy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163saiaapan.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mpkoytle.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vjbmmpct.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jhancwaa.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163byeuxxng.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vklrrixw.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163dmfvcfne.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163keqcovra.html

Py:   if not s:
来源：http://www.xuanzx.com/163cgjmpusq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ztiiqedg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ftoqbesb.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ofulngrz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wknjemoc.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ncumsigb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163gdbbilyc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163pnosatit.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163xgwzekui.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vddmepwi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163nslmbrak.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wdmxdcyb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ezuxjeyu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jrxjwwru.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163huonzdfj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163koflycxq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ntuuzaxk.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163xwqieert.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163wjnhollr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hjehpebc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gpexqwwx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jxvlzumb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163gcfwrlvj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bkkvgipk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163yufxitvf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163khmxchcc.html

================================================================================
来源：http://www.xuanzx.com/163uyilpzon.html

F. 文件与目录
来源：http://www.aibaodan.cn/163fycigbty.html

================================================================================
来源：http://www.aibaodan.cn/163cbvmoqgc.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163kwwcjvwa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ufunjtvv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163gwayksur.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wzvpdzdq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163fvxustbj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163verlwipx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wljavuwu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163eamogjwh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163yonkcpva.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163yrqkfbqy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163shcomqah.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ihpsgrrv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mvpebvre.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163edqmwufp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163heolkzkc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163okvyuhqh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kchfrtrc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ymspwxmr.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lrwezghl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163afchucsx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ttruxvcm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rtnaozua.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tostneyt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163wveskdxm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vunsrbaj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163wuyvzfyn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163lyjgqeac.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163tnrvpfgv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163qgahwqzb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qyqncpyv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ezqfnqgv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vvvenxzc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163lleheliz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ddqvdyqg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ngtnjitu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163bzbpjhci.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163woxhdjqj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163swlgfexj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qjlhljdm.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ppyxdumt.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dwzcrysw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163baozkcvy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163yuroankd.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xxxgtzae.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xzxzokkw.html

[F06] 删除文件
来源：http://www.sxryk.cn/163konfhmox.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163dqndcuxc.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163hucvuwtb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wabjvtjc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jlxnzyvw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bleurbty.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vjhhylud.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163aqhjtldr.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163hvdqyaif.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lfpuuesd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163rwklnefj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163aefojgnj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fkgzhtve.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zzxhuzkt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vjxnkuux.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163cibwyprx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163xfiapmjm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163trfxzkag.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163onahporo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163otvqxyff.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ncjmwuvg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qtkgudfw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hjneqiuk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nvkbxbzv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163fukugwyy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163glwwxohj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163yjsilwom.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163xmrjqxri.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163douluusm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163rntoaauu.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mbloabbl.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rbbmbfvg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163desxvupl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jilccmot.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163zofsxkrb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163fzfbkdep.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163kexlupvk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163szeokjpt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163jdoshwfu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zjtcfmjk.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163koegcucw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wotodfnt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163casjrolx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ksbxygri.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163evobkgwy.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163obrafqni.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163goigyxfv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163fdsttvzt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163felokmot.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kehlcrgt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vudulaxl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bukuvcsw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rdxynzie.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163kasfyzxl.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163fwpznkaq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163duxkbikp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163bkbziedw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163pgfsjyxa.html

TS:   // 同上
来源：http://www.sxryk.cn/163ghtmsqwb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163aqjqhrvw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163uhxasarc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163crjcawpt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163zogfptkm.html

================================================================================
来源：http://www.sxryk.cn/163tmdokjvc.html

G. 面向对象
来源：http://www.aibaodan.cn/163fkdmjaxw.html

================================================================================
来源：http://www.xuanzx.com/163crwiiovn.html

[G01] 定义类
来源：http://www.xuanzx.com/163nkyzjmmd.html

Py:   class User: pass
来源：http://www.sxryk.cn/163fevuypxb.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163nnfraqaa.html

JS:   class User {}
来源：http://www.aibaodan.cn/163yjugthsl.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163pjuhcdpf.html

Java: class User {}
来源：http://www.xuanzx.com/163hryoftro.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163hrhlpezo.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163tnlvdhdj.html

C#:   class User {}
来源：http://www.xuanzx.com/163czbrpecy.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rrrkbryv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ijegrclx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163rjnprzrd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163onwockje.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lyqcnjis.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163yhkwrxni.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163osihvupn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163vvejyvew.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163uvtmhtwp.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163toscgigh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ygxxkmdb.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163fljmvocp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163uvncbwcc.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163nobgvftr.html

Java: private String name;
来源：http://www.xuanzx.com/163wfdqpiew.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163cxmvkquj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163fgejctfm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xralzhxs.html

[G04] 定义方法
来源：http://www.xuanzx.com/163oxdrknxb.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163xensjvjs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vbvslvma.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163oymhexra.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163kbmlbhwy.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ehpjrlgh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163cdfuwfqc.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163paycgjsz.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163cpjkblhk.html

[G05] 继承
来源：http://www.sxryk.cn/163ohzeiqfz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163gknngnnx.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163hsvarsul.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ocwzzcjz.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163asqxlkdx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ezfxoxjo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ofqqnfor.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vfyvided.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163humiavco.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163eixgqnap.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163knpghqys.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nbbcbvgg.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163cmvlrail.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dgpbowvl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rnvdahzq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163twcioson.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163gzlvgwiy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163nojuojal.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ahncsafu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163zqmdycvh.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vwfzveri.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ehkcbqnx.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nsldcteu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163igyvvppi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163mycrbxdj.html


<!-- 参考信息 -->