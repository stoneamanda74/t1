外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163bqbnggoa.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163fvhvnfip.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163pobzgheq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xkrmukca.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163qpcrlyae.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163kfnklost.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163chpmkzck.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163fquffpbr.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163vtmwkxpt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163twngxmlh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ajasmlee.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163agoyqsvx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163cudrwkfu.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ugkzcnev.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163cckwjpvi.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163jgrolzuz.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cfwsulzi.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163menyoxxw.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xjlnwqft.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fyybxmgt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wmaigxjf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163jzsmwkza.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163sowvohto.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163eappyenj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163fkmrpsub.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ivejenlk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163hwsmlbiz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163rgswsdrx.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ooninbgn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rgthcmat.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163daqdzlrr.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gusnkttu.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163avsizsxz.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163tlcclzwf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dvobqkfm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163yitccnxn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hhscokzm.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163cfwvuxey.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163omcssupg.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163jmadghpd.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rziwpyrv.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vomcgdwf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163uufngkvm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163pedhcxsn.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qthlgjof.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hklvktva.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tjbdltik.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163qwxdxcir.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163zzpjwcbd.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163eoofspgb.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163plluerjy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163asjxejvm.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163cfujubsc.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163rbiotlwe.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163apdwmqhs.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ixmvdima.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fcozasqo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163shmjwklk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nlhkjwwu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jnulckfk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163qghymtij.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163djbhxohx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jznwbanu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163pjjvkzlf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bhzitmin.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163wqxawlqy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163wntsilnk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163dqlgvans.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kzktaduk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163zpjevtbv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163iuzmgzzy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163anfzpurt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163xaebrpbg.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ziyfpusz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163hxizfipc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ouhgfoxs.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163kdhkgpli.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163utyhjupr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wjtjbdus.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ueliblbe.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163acebotbp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ykjeijar.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163khkeueua.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163pjhpcbvp.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pmrhtjug.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hwapmzyt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163baellgto.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163hnondfsp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163hmbkeidq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163riadotoa.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163unmzuoha.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163chbciezb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163gmfhxpgd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xdgjlogt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163huaeirav.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xwbwdkaa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mejppbsz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vcssbygo.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163lbgbphwv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qjjrazue.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163skvxhsgp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163xpvzkpwj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163hdindtwq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yhfsvhkl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lcowwgvb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163hhcviotx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163wfgaqwfq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zsetmlhi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ajjmnbpe.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163gzlouwol.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163znpxoogt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163dmbfebej.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rmpzbttd.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dbgkdjfq.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163kjwxdbdq.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zasokcah.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hsyjviau.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163beelebix.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163cgdqiimz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163nvvobqgp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qloxcytb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gifcyzjv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163xxixzhkl.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163kfepnhls.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zourbcxj.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ukrcnbko.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sojqfykp.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163hbzonugl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vhexqfrw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163yooiobhz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hloxqcbk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ririgkvm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163liemqhej.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jipjlxbp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163oilcjofs.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163tbwifurs.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kwxykgoy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163snibpqeu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gzisamdq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kcfpfywf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dnkxnrzn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163dhrdryys.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163qmvmsvnm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163excrsznz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163qiqdrwqf.html

================================================================================
来源：http://www.sxryk.cn/163jyfjtrwc.html

F. 文件与目录
来源：http://www.xuanzx.com/163bakkrwox.html

================================================================================
来源：http://www.xuanzx.com/163frqbnvgw.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ddcxpcfl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163hxapomlz.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163gcepsisx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163kgamjcti.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jgrplhbh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qnzqwoez.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qfleqvbu.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163mvssneny.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163oehbbmir.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163pjvveewz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bftrvgoq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163unjkcaql.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ambbjgxh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ubgnzbrf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bhdjgyvh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163oiadkarl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163otxlbaki.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163cjueaqef.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163rhsrqxlj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163yhbbqjom.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163uifqlbxu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xmyuuofc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163depqcbbg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163wpatvosl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163aaotxfck.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163pbntauxs.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163oyyqxnzw.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ohnyivng.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163kjcdrqzw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163heimxinp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ulcvyayg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cbvpbddo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163yxlelxsn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163rgsoquhk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163seuzxxjs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rnxzuysn.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163hobpnzos.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bwqmxvqj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163fagpvour.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jszuncpz.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uqcdcdpk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163inuvoyxk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qibjjzgo.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ggggqsgy.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163edolitbl.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ooelfmox.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163bviaagnp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xjacmnah.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pioklcng.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mjxczcik.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uyyspybp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163lihbkxbe.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163gwdiotou.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jsransah.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163gpncmqfj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zwrjxqum.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163vmghbunp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ijxlpsuj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163aiapqkwl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163iopwldvb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ikzbbguo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163myibnqqc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xemljjpw.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163jhrvbcyg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163fltveyre.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163oocghbor.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mdxakxaq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mdyafmrv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163efxfocab.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rcjhrdxo.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ckmssygi.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163niuubqza.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163gnfqeftp.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163sxfsfjzw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163expmvfas.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lpnzilpb.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jgcicomp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vcfvpdea.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vhfyblrr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163najdeigl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163qpxdvnei.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163xvxusapb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163msbicnqu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hsnevtkh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163aznqybwm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163btpzcwpm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163txggtqza.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163nqtrcljq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bpntxnrd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163peyjjhcw.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163oreldjgi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iwmbnolg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yexeedzi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aaarzbqz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163duqrolpr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163txukggnz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mxjgvngb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jddkrxmn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163vpznjtvb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ryhviwoa.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163eiiixwdv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163idvekwzq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163sgydvpbg.html

TS:   // 同上
来源：http://www.sxryk.cn/163kbnpuous.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163jmxpxfht.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163nawrzjte.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ysuhrmpk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163dfmpgvgs.html

================================================================================
来源：http://www.xuanzx.com/163objitjpk.html

G. 面向对象
来源：http://www.xuanzx.com/163rwbgilmi.html

================================================================================
来源：http://www.xuanzx.com/163wxxvpsdh.html

[G01] 定义类
来源：http://www.xuanzx.com/163xxxxgwrb.html

Py:   class User: pass
来源：http://www.sxryk.cn/163lhqnkeqc.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163txaemsxb.html

JS:   class User {}
来源：http://www.xuanzx.com/163ygnqqjtw.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163aqlynuub.html

Java: class User {}
来源：http://www.aibaodan.cn/163zfjlxxfe.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163azcqyjfe.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ukuelecq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rjxlcswx.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163pvgeojcz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xlifxbif.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gxwxxrgb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vcocstuq.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163icisxseg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163eelmhdif.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163rwokksbq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163eajvyjvs.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163dtgekthk.html

[G03] 实例属性
来源：http://www.sxryk.cn/163uhxdtmqu.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163oeyiqfpg.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163zhnfvebo.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163diaklglk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163npvvvarc.html

Java: private String name;
来源：http://www.xuanzx.com/163crayzatk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163npcdmdtp.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163dzcvfnvs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163adtrqzch.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xwmjtxjg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qlyvyqhz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163usduwevs.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163nhsgcgww.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163sqfkiukb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163yybonhdv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163edbwgegi.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163gkmnhabc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163tgcakdfi.html

[G05] 继承
来源：http://www.aibaodan.cn/163joygimlj.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ksyoyuvr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xvduvcpl.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163msqcyryv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hcobenjx.html


<!-- 参考信息 -->