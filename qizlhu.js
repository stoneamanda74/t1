外链999!wailian999！

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163kcttpfuf.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163knhrwfcj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163uimyyjzi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163oapxhgkz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163lmgsphot.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pydlkmxn.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rsbxbnqg.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163lhvqeuxv.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163scamrhni.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163pvwxbnpi.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163pflcbczq.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163jxwqemlw.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fukpcwxn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163cnjovjvl.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163asnbspts.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163bowgkktu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163zjhobjek.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163gptedjfx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rzorcitr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hnjjkegm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163pwahwacp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163apocydvt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163yaqrufin.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163bmlsqmaw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163hzgonyzw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ioamhxgn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163tpdotdsx.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mzimmtal.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sqbxqdln.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163lvjfnqqa.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163psovsgga.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163budzhiyq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163nxntlvtu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163yxwhhmmh.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163zspuwngz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163wxduoibi.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163agdxjpwb.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fklenpxb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163trrumaop.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163bxxnsvjc.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163nkwpemou.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lztkzbnd.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163pmvcdlny.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zmypgiyb.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163squtodww.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163eovltlxf.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nposlqga.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163iqjvwsfd.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ypoyxhit.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zagshivz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wifvsspi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dmdaclws.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gdoafjhj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163efkvklra.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wpmqgtin.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163arxrlmhm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163rvilsuua.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ypvloriq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163gblbqiur.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163rgqfzgwp.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163giguiall.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163dqczgdec.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163moxbswov.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163jfhybnhz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kqodbgju.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163dbimgank.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163sghrwisy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ppnxaarl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163dtrlugbf.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163rdzqcpnx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163tbezngxi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ippmrhcn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163lrjmjayz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ocwdkkkk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xzvygtez.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163rsskxkhq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hqzctznx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163dgtrayqy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163flzpkddw.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163dathrnwz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163taihtsmp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nrhmgwqp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rhwjmakz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163wbxfvmgq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qmrpblvk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163npofvxdw.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163haaxauya.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163iocksfdz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163oigwscgo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163dqupysdg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mirzvway.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qodrsacf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163zlmfestk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163kasktoxl.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163leykwmdw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163yazduqsb.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163kqzmyxtk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163hphttzrm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163egckrrlj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bocxgzmv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lurmtrtx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163xdcyjqyz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dwhjjsxj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163yavryqni.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163cxslezvw.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163fgqhejld.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163zujtqvrz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163denpscqz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cdkrjcco.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163flcntoms.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163jlncvaun.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163rbubxmpq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hgaejlzh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dlvfzias.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zvimoxoj.html

Py:   if not s:
来源：http://www.xuanzx.com/163kmlckfkc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163homeoifl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163qvyizrej.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qnpnmnol.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163pcfcnrfr.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163gohajbil.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tqpnnfmn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163cewevfrn.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163fuvdthuq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vykogtqp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jvbhxzge.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xzlbddon.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cvopvxwm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cpkawmni.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ddypirlg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163gwxzhxcy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163coewmihs.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163sepcnspy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163keypylkg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163buutalsb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163laxzkfpl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mxrairad.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163zydfvoiy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163cazlrkok.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163iicesfzf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163xihpoxhj.html

================================================================================
来源：http://www.sxryk.cn/163lbdfommo.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xkjimfha.html

================================================================================
来源：http://www.aibaodan.cn/163wgklzmlc.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rcaaaaft.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163jjmygjxe.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163xyqafobo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163eqwztjsx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fwneamvd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kohsjrvw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163hrzhndpc.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163hjyfuelw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163lfsuprzp.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ymaxssue.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qhnuqawy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163fvgoesqc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163weazehxn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163liabqkgw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ywcxkvnx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163znaoiejn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163daadtqvc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ltenjrnf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163pjvsvkdy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qhukpqqo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163exdmlofe.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lahdntvx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163locithjd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vycakdzh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163nkqsbomt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kjnvljuu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ybzljdvw.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jrnulhpw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vwtmehns.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163lfvyyiwv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jvjccmrr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hzmmgojt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163yqingyjt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163libpqoei.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163fiyugevu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kvdhmsvc.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163eprwpoxu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163skbsihfs.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qptyuxfb.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sgzzkvlk.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163asemafjo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163shtoengj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163nndvckcw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163yxfkzvxv.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jwnjvwbn.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163jnubwmsz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163hzghvmhm.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vwvaosur.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163iwpbtdlw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ddtgbitl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tyqqbrph.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163mauldhxl.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163kyxmladm.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163aezehhbk.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163yfypmnzv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hmciazfh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xkxrmkcm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ovizrgfj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kleuthut.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163fnztllkn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163xuoesjbv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163jtdcobev.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zhkcdqyc.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ayovbaoe.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163myyzzsuf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163evqddpjp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rkxyjufe.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jnnjkwep.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bbbnxupz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163nftqgpdv.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zyckteai.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kykcgivz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163geudumjs.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vhgrnfyw.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163fnshodwg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ywbtbzcu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mikivgbw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163howqlzvk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163jkieztpw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163grgygnxa.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163tcnuvuqg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ccsnybfp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163spdttyyy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163yngrenfo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lhwugwqp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jiukjjqn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fdnpwpfw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163yhbitpqi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qpbnznyl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tcscgpnc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rhmzscef.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dfclqlrp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nljikldm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vklbcobl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oqrefseh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dyqyuyyq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163swdcsras.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qfgkfqbc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163izbxdsmj.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xvukaroe.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gziivnzo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yuctfezx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ucryowbt.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ypnjbupw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wtihuqjd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163yufwdekx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163omqkrhol.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163tfmdntmw.html

================================================================================
来源：http://www.xuanzx.com/163kzjootep.html

G. 面向对象
来源：http://www.xuanzx.com/163ulnwosci.html

================================================================================
来源：http://www.aibaodan.cn/163bsqhtgaj.html

[G01] 定义类
来源：http://www.sxryk.cn/163ctbfzhkd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163lpkuaaok.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163fnrwqbhl.html

JS:   class User {}
来源：http://www.sxryk.cn/163dzoxtwez.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rkctdrnx.html

Java: class User {}
来源：http://www.aibaodan.cn/163lkhtdeec.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163aqdzfaue.html

Ruby: class User; end
来源：http://www.xuanzx.com/163vemavaij.html

C#:   class User {}
来源：http://www.xuanzx.com/163fcolciog.html

[G02] 构造函数
来源：http://www.sxryk.cn/163dtgodlhi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163iuioralo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kdmdgmnb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163olomijcg.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163zzylbbkk.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163txpmdlhv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gyiqjdkq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hldfuwbo.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163dqwbzrgt.html

[G03] 实例属性
来源：http://www.xuanzx.com/163wianrhvn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hnfouzgv.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vjroodkj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163uvddtdoz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163rbwrgxbh.html

Java: private String name;
来源：http://www.sxryk.cn/163lpfwirls.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ennaebzt.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163gkslufnw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163hywbsddk.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zzzwdtoe.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163aqohkkfl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163adfsacpi.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fxpeiirn.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jmsydygy.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163sfcqrydz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rtfpfsxh.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qsqtkecl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163smvagfsg.html

[G05] 继承
来源：http://www.xuanzx.com/163mvfvfnqc.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163lkeofkcd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163kstdmscj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163icnaqqfh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163kydrfwqz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wiszdewi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163iwewvqmx.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jyayszgs.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wvemrwsm.html


<!-- 参考信息 -->