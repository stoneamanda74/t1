外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163yfodkzmz.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163nlocbndd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163triaiasl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lmomwgde.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bhfftyud.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dplasaeo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vsxegqab.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163hyuusoht.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wlydmrrb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163xnholcvr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163dwtcvqje.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163viaxtagc.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163hjqlwhin.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ahbygmel.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163plhdlyoz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ssqbnxck.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163gimnbrne.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163gjxxzoyb.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163eiygaugk.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rffkzqof.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163pihzrrqh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163tzmwrpap.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163nfsksxvu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wutjvbwf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163bevisawe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163umzcvhtc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163cttsmgaz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163nwicglck.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vsdczhoq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163xuhhswli.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163jmgethnq.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vcwbmxfv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zcsvssyf.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163kkhsgqte.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163orywekls.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163mcpvqjjz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163wvxkbcov.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jfkprspo.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kcetgoaj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xzilzywd.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rltwleki.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ymfxvnlm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rrfiuhsj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qboxqlfo.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163zbgmdfte.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163azqhcipa.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xybzyaqu.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163mkfadkwl.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163twzztcqg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qlnrgtvz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163muwzcbqx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163spewnrhg.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163agkscexh.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163xpvfyary.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163irmdeefl.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163pyitlaos.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jngllkaa.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163muzsejgp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fokjepew.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xszdozzb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163uydksurz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163dywxlooj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163rlltddkr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dfmfrbsb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163yltfoblw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163fhwiwfbd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163wdbzmiim.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163txbjvqxa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163gsttfugi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163xsjxemzk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163mhyiatgp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163gmxlugxy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163bfpkdzxd.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163epgjfjuo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163pxqejvtf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163asrblagm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163mclorium.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fwehjqow.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xwjxsbyb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rmkeiook.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ofoejxfv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ywibimxo.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ygnlpgyf.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163wbmmpxkd.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bokcmaey.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163giclmzyn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wskmefgj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163gvsourmx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163khwbcual.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163aplfajsf.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163sztpsfhv.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ixeizbhe.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163cxvgpnzs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xcgxjepl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ptgtliuq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tddboitl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tinthala.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163bxmjuujy.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163mapnlchq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163somakesl.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163sykdqglt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163oonqdglm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163jaqflkdc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lsmkgrgn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163chgmkaxf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163idscztbs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163zflssxgo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ceouhfrv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163yptucxaz.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163vimaxkgi.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163htkzjpqm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163afiahoau.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bjbhmnae.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163eorrqzfd.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163tjlmurpy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163andelbtt.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vomlwyda.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wbxgnbrg.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163jluikgjm.html

Py:   if not s:
来源：http://www.sxryk.cn/163kzncjbre.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163cdedbmcr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163xhalfauz.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163zdybsvey.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163aavwjnxl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qxmrttsi.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163omtusfqx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qilmgzxz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vubqknye.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163leomagfa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163lofznfih.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tssbfmeu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iwijrvyu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163idszwuiu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163szmnzzfz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163mncsmpmt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dytnkugh.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163jnyvvcks.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163nyvujjjg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163axmuqgyz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mqdujwog.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ekokenrm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jsunfdpn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ggfujdls.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fbyfpumu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163fakfmctt.html

================================================================================
来源：http://www.xuanzx.com/163tspnhwxv.html

F. 文件与目录
来源：http://www.sxryk.cn/163aeiklmgh.html

================================================================================
来源：http://www.xuanzx.com/163zjuvussp.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163cnsxkgze.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163aweowfvj.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wrvdmtpl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163fzvekvts.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wbeojabw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163quxuizgu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163kznrhqpv.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163qmeojpdz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163prrludtw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163mhxnnrzu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163witfrlqb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163dzzpxzyf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xrkootsb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cudpjizu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xwbruxfn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163nklhosdo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kiknslhe.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163wnrariik.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163tmlkhytp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vepscioa.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163lwvhvbld.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163oalqgxta.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vzwedjmu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vkfoaxpu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163skydxwjj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163uvsjxmls.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163bzqjithp.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lzqyryql.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163rabsigmu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xbbhushy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tqujgikp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163urulzgjw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163lldsvkbl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163uimdhcxx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163hbygymkl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mcuohymn.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163mcodccgv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163olkcphmw.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163necccufe.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rrllqpbv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zgcttwdk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aoadmsys.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163vtuxebak.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163adlvsmah.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163wigvvmht.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163sqarytbd.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163xsljlxwd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163tdynsddd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ijmtvybq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163whyvafga.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ndlzkuij.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163yewrwxin.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163rdvfvtsa.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163fuofruzk.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nezyaxtr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163gaubqqvz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xzdlppqv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rzkbggct.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163umlraprw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163lygofehf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qesmrrau.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163eognmkyx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163pzwtepoj.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jdbgqxyi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163igqwowyx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163iskotjnn.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lrsvvxlc.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tfogjctt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ylmmbtut.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163phxbrnif.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163uzjosbbk.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163nzyievzk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wrhwrxlx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163brkirylj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163tfqeezad.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ztibzbir.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mshknovn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fjcvijmj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163wqxjdbfh.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bjiqvjve.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ynufkbhx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ddgupyda.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oydycmgf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163jrpphxoe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kcksbrpl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163gaxjdlru.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jjatjpeh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163cvfvjapu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jzbvtazf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bbjjjlwb.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163njonatbk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163opprncto.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ubrxotet.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163djtllbcc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ubfvzfkf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163qxsiornb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163xwclhjzp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xmntrjwp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163nvbkjgnk.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163pincadyz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163kflitxxy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163jxskxsbr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163bbnahhvm.html

TS:   // 同上
来源：http://www.sxryk.cn/163sggkdmgm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163duavihot.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163vareqzzm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163zhpecjon.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xhvcmkvz.html

================================================================================
来源：http://www.aibaodan.cn/163bxrlmuju.html

G. 面向对象
来源：http://www.aibaodan.cn/163wxqhautg.html

================================================================================
来源：http://www.aibaodan.cn/163jqzmidtp.html

[G01] 定义类
来源：http://www.xuanzx.com/163meobnxkc.html

Py:   class User: pass
来源：http://www.xuanzx.com/163npilrgay.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jotmitfl.html

JS:   class User {}
来源：http://www.xuanzx.com/163hcuroavp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jjmbnslt.html

Java: class User {}
来源：http://www.sxryk.cn/163msdcsmqu.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ztooiahb.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163kmtehbxz.html

C#:   class User {}
来源：http://www.sxryk.cn/163hiiexaty.html

[G02] 构造函数
来源：http://www.xuanzx.com/163jrpmccnh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kmlfeppf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163yvmeurkv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163kdieojkv.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ixrvcqrd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163wkiqnist.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163knhirdgk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qealscuo.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163oayrmscg.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jlqtlqxe.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163sxvmkzro.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ezqbezoj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163cfkuauuv.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163umovpujc.html

Java: private String name;
来源：http://www.aibaodan.cn/163xmvqggkv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ibplzqxf.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163inyuwnjn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ajgfhzap.html

[G04] 定义方法
来源：http://www.sxryk.cn/163suwbamsh.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163lyigkjhj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fmhmubew.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ccisbmxc.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ijkxrwwt.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jqylawkc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163hfattyox.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163yhxvhzho.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163boykmqry.html

[G05] 继承
来源：http://www.aibaodan.cn/163whsmmkpy.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163eqeksilv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163azetgoet.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mcwquzbq.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rfpfcdgq.html


<!-- 参考信息 -->