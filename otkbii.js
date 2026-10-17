外链999!wailian999！

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ubymjxky.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163rlnrbzci.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vuyiegxo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pnpvllqq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ridzfzmz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163eeuximjo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wvoxpyej.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163jppfxzun.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163yjdnyfso.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163dkttgjvg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163cjsvacyj.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cybqyabl.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lodeevrf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pwgpkbov.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163hdvbrxas.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ihjmuusz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163pvsyugnq.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qorajzyn.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163nzbkxvtb.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163zxoifujc.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mneuuqrp.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ujfyngzu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163oiokcoyg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163feszxvjs.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163zrivkjwr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zmhenhao.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163gfoeeooc.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163lzabwjsg.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163njkmffby.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163igieehld.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yytqgnft.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ioamgviz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163vmdznyqe.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163eryoczaf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163wdhvjebb.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ymjsiiog.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163kdrwxfai.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ctkpgsln.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wdfxdxka.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nmbjismy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ckmfafoq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wdvizzre.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163anwpdcvl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zrzlkyrc.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163mrezvflf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163dxajyhhq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rbwrlfin.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163lybbfswx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hdaxayqe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163nbfcrwut.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163hyoehcjr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163strvejyk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163pkbogxwz.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163bgtcebdd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163iezywnsf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163dnjbmuvt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jduhhrao.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163qejydxdd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mwdnycxx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hhgjuebs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163lbpjignt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vtnvbhik.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163mnvufjyy.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ikasodwx.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163tftkzzcw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163npnyrvuw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jeflzrjw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163qqsgnlll.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163nrfuylfs.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vcngduvf.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ezirpzbk.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163rtwtaskc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163brasepih.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163qnbrrznt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tvruhlht.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163uxfzalpe.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hpgrbozh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tausipsm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163fcefrsgh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163hwhpzvrx.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163nhpwstxb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mpdkwbat.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163bdjhwzny.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qyskdmfh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ezqpxsmu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ruxsbxkp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163sirnvxou.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163zaenuqqy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mdpnbapq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163veztrihq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163plzgtjvc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163slczdozm.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nuhtbjxn.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ntitcfzv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163cyuqcfgp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ljixsmer.html

Ruby: s.lines
来源：http://www.sxryk.cn/163jndwupqi.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qlahgare.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163nuhvjivc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163yaafxosv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163mifzryqa.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163xncommjs.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163sckyprdx.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163bzgdoezx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tenhjlqd.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163scurefuf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ujayxjfh.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163tjjypgel.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rcfeasaq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163otnvhpew.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iemwandd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nsszmjjv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vkxbkymw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163gbqvdhcx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163mtaogtvs.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163mwuwcayc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ehknldvu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ttgeiuuz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vubbgmhf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hwijsyha.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tewusvrc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qyuvllwb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163shafqxxl.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vkriplai.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163iayrqhmx.html

================================================================================
来源：http://www.sxryk.cn/163vasjvdam.html

F. 文件与目录
来源：http://www.sxryk.cn/163ffnlgcln.html

================================================================================
来源：http://www.xuanzx.com/163rgjzxpvx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ypzltcwb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163aexaarui.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ioxqjubf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163thpzuysr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ccbbvobu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bbgpqpme.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ldmoiwih.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163cyocrvyg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163uuswehoy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163sgxvmlii.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fbhcwcci.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rejyknvs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rrqwiqmg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bgackase.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dxqiefqh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163btpybprj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163fzlqycdy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163cycbzyls.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163crfcvqxt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sipwixli.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163irjxllcm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hplcddqd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yvthvsau.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xeolwmno.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163stjcuqhc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163fnvppaha.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163fmwrlfzk.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163bnjcxyih.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163aoujowym.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163mcoykyau.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vncxdotc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ezyxufke.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163xgebxpes.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163gmmpybqg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163xijgjxmm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163wpwscjbm.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163fpnyaqwa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163qkdwwpbf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163tqllbjsp.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jjydxrgv.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jspmenna.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cvauiigu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163cqvsxaib.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163cvgdqgbs.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163uhryrvhy.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ncpsqgeu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163aaacougd.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163xqtmyurm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qeicbwuw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ffdtkygc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tnbsbpie.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kidjwexa.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163bhvcgvzo.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ngfvkvvz.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163epsrgdup.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163iuxfukox.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163nvnutaja.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fybugheh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yptpnmth.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163cnsastmj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fhpfdezs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163lwkuiqsc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ngedifvp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163klnjgrvs.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163blmcqmge.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rdkkilcm.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163szjumtdn.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vnavmzhz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tpvulwlh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xqnzetth.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zjwvznuj.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163vvclfdhx.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wykgbxwh.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163brbvrjbw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rmwyskkg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cofsxore.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qkkpedhx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gsgjdzli.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ntvgirpc.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163dnvnjzdw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163yxubziry.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163knwrtati.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jwyhidvj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ledffozt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dzpyobcp.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163muwdhkyb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163avgpygjs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163swoyidih.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vpxurvik.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jkhhxebx.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vzfuqpsh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fzqqyrvb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163zteazsne.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163odssmvql.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yfmyrgyk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ocyhxjja.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163kqcirjwm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cstpusnr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163pdnbweef.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163dqvawkhd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163pgoaxowt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163sekpqczq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163shzgopiy.html

TS:   // 同上
来源：http://www.sxryk.cn/163anxwvjgf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qannsnth.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xozaeusi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163odhljdhf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163hixgompb.html

================================================================================
来源：http://www.xuanzx.com/163tbtuipnp.html

G. 面向对象
来源：http://www.sxryk.cn/163yzwwfrii.html

================================================================================
来源：http://www.aibaodan.cn/163tktwsfft.html

[G01] 定义类
来源：http://www.sxryk.cn/163jkqesjmc.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163esnubvkm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hmvmehum.html

JS:   class User {}
来源：http://www.aibaodan.cn/163fwnfqwyu.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163packtevl.html

Java: class User {}
来源：http://www.xuanzx.com/163kjeyhzec.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163byaoevma.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163yaeejsmg.html

C#:   class User {}
来源：http://www.sxryk.cn/163mftvhcal.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163sfshlfxc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vftszsdr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kzgtwymx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163fyljbhxu.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hyocqqsk.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163yumbkocf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hxgjtxzg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wfjwtodu.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xdtjkgnu.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163iukieygb.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163jgiolxal.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rjgiyuno.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zehluzvj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163mgjgnsdn.html

Java: private String name;
来源：http://www.xuanzx.com/163biexcarp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xmzomgqt.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mxlopjfo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163iwhfsmmr.html

[G04] 定义方法
来源：http://www.sxryk.cn/163mqzagoer.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163mmyhverw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163nlhtepkx.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163koiisnpk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163iocvbvpu.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163dkonruug.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163mtyejcfl.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163uqarpwoc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163eidgbcjh.html

[G05] 继承
来源：http://www.aibaodan.cn/163oulysfyu.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163zcuefkoz.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cedybkns.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fakbdbox.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163duwzgaxw.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pupdbdqz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163brhwlpag.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ypoyylrg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163erdmiwqm.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ivlssdgj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163njliyjow.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jjsdbylh.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lkqhjurm.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bhppforv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163hrqoscvq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163dhhrulpl.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163qtgelmej.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163aagvtgli.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pwwjgjrn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163vhzzgvdd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163htqlpckp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mvbyupjd.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ddjmggrv.html

Java: super.greet();
来源：http://www.sxryk.cn/163urkgkqrj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163tqyqdykq.html


<!-- 参考信息 -->