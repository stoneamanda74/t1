外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163xgacexsn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163mcusgjiy.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163czfkavka.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163fnimkiee.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163mugmhnnl.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163edalrkhm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163vqsoclhu.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tpxgwede.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163waluxedq.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163refjtnyy.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ysnemdnz.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163pilfshnl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163mhriutaq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163cvxgjvjd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yrehspep.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163abhfurhr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163wgpopfec.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ptkgspri.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163cmdvqtqe.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163gufktmml.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ezszmwwa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163dfsqhlis.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163shnikavv.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kcqhussw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pzcxrxex.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163bdbatlvo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163bnbymufz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163mtoihnml.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163xgykpvpq.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163oboykdff.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163zflrvrtj.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163jbxitfgy.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lhyogxed.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ulajdyir.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163falehkgt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163carduaiz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163dvfxyxxz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yljfohiv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wtpnrgyr.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163tynmgafl.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qjwyqwhd.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wqxsyumj.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jcqmrnct.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vggrmdcu.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163lsxfvasf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163eyqyljlb.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fbfippwd.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163qrbkremb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qexkcovj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163xhygssfb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pfzpfkdv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163uwfutybw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ivgtznyd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163wzjoupxc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ilkwfjky.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163knzwoaha.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163lmfytfwb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163pzlxozhb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163gkckqjvq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qzowqapz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ktcnckkg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163aqihdsxz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163dlvhasnt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163krjlbtzr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vrscnfkd.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163flnbhmyg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163gxedzujm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163gimovxys.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163qjoptbat.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163gzteyggx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163iqehfszv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gyuhbzjn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163wohdfnbe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163azfmusuv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163bxdyocwh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ezlsimcw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163hkzpfpbc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ghilbsqd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dbfhmsqq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163tfjplotr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qxhibgye.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163tqtlbzso.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tbtewqbf.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jivdcrmu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163rvtmjhpm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163uznuslqc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163woiooyoj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hqkwahsb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163aonktius.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mdwzsket.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163dtkbdxta.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163oakdbjvc.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xhijwugj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163wehaupnd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nqbscrgr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bpxbviun.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pjjetuhc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163zwupayoy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163gszcrrhk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zsrdnwbq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ojwokbyg.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163thblrarb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dznqdumq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163dmoiskly.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163huefrlvc.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zidvmivr.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163skliolnz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163uxbqshda.html

Ruby: s.lines
来源：http://www.sxryk.cn/163wqqrmxfo.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fyybzxvv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163npgqwqir.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qicyqood.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163cvfyjhhz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163hbkqvzqc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163idrccoln.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163jreurqas.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ecuafyvu.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qeblrluv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ysfhasay.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ipvzabir.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163xstvgwae.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163fkfpfawp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vpfmfnbi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gvqnmbkj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ahbbojnz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163gimjcpqr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163bcyluhzk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163gicdklmm.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163umeuhycc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163uhamnxgk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wacpmifw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hempzkwq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pmzlcjol.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ehqkuijd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ogikybeu.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163xyzrjgxt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163pffhuula.html

================================================================================
来源：http://www.xuanzx.com/163ubqqaiah.html

F. 文件与目录
来源：http://www.sxryk.cn/163nknmmlxn.html

================================================================================
来源：http://www.aibaodan.cn/163rmnjfcxh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163tuglkvwo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163hovxxfdc.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163tnioepga.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zoofsnol.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xfkmlzca.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wzdfjdxu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163kgyhriet.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163pfvjapzj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jiiemdkq.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163sffmeyit.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163fbapixgh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163kuviztkr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mdfbjykx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ipgygkjf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ndqshtry.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163btydbpdh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ihlghqrj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163prnqpsbl.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jlnftlot.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163mrblwpcs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163mubhzekl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lexpedpd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zckjypkh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ohvwtaej.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163zvwbmcgu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163cokwtirh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ckzlqcaf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163mnwdstyw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163gsludrom.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hylfhvdh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ibaehfsv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hhzllxcn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163osdflqti.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kbzckbhn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163fbbzfizd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dpizqpaw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bvppszok.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163yjzhpyqy.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ossmtuzh.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fojoznnx.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tdioheuh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gelzbajd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163pjdkwckh.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163dcskkhup.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163hikyoboa.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163gdxqzoye.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163fnbbqzib.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163mmumeygk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kwxaszck.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wuumqowm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163azmdfyqn.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vfnplons.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163khwodkpq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nqoqhkfn.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163bfpafuzi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163wwdfgoxf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163rktbmipb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kwwahrfo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tqbqlcuc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xbazrhpe.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hbxmrxut.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163uugnzvua.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jlkffyui.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xtubmwfh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vacsdynl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rxpqdluw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163buuibfew.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zlfymmdh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163akizsmrx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163eyialxlj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jotivxko.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hfgsiavb.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163wflaqysb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ooporquy.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163wqnjvdxh.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qywkjeuu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nyqronkh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vrlygbkw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hsavygtp.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163lncpjpvv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dpbpspuv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163xxjmkzlr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ntunjsdk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ljtonstn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qubafoso.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163heezytyi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vsdbruhe.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rrvrvbxt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yqymtkxc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163aynicmst.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163fjgoqplf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bouwqhhj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163fxjuoopp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rqryjkys.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gicjkyxr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163uwzxlrxk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163xkchqxhk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mbavzdlo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ibrgwuwx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163hbikgrfv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163manfwnoq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163rdtoqvky.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163efmprizd.html

TS:   // 同上
来源：http://www.aibaodan.cn/163srjildgq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163eejtzpae.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lfknajkm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163sjutussr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163prpwngye.html

================================================================================
来源：http://www.xuanzx.com/163fclqvwem.html

G. 面向对象
来源：http://www.sxryk.cn/163jjymqzib.html

================================================================================
来源：http://www.aibaodan.cn/163gkxpqjrg.html

[G01] 定义类
来源：http://www.aibaodan.cn/163cykehlpw.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163fkmimxou.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ulmjkieb.html

JS:   class User {}
来源：http://www.xuanzx.com/163wttqjbsz.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163eicnpjrt.html

Java: class User {}
来源：http://www.xuanzx.com/163hbnfpidk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wrlbammu.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zpvaruka.html

C#:   class User {}
来源：http://www.xuanzx.com/163xpwtvzxd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163nrnexesd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163eroplmrr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vvixdrtg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163asxvnznc.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163wmjvfifz.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ilbqgpjr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ojbrkbrz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163njlutkhh.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163finregwg.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mhfdpofu.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163peuxsuqh.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zltdjovq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rgkibacr.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ytgypuey.html

Java: private String name;
来源：http://www.xuanzx.com/163svgbqixi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163txkmtizt.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ztouggiz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163txytlaoy.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163oregybpv.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ihfjfzjk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163oamonfrw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gzeisvyf.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163eaxanswm.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163wnwodiwq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163kjtxgnqb.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fgorblnb.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163gjiurgeq.html

[G05] 继承
来源：http://www.xuanzx.com/163jxkeqmba.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163cjoqfajp.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163dsmggcvr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hnilftqm.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kohwldlz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163zoajtxna.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hnulhyhp.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163xlvuooem.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163qhsxxdng.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mwkfdeso.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xaxhnaxj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163acdlswkx.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mnwhswfy.html


<!-- 参考信息 -->