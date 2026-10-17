外链999!wailian999！

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163hvnrezcf.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163khtxxpxf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163gwiwqxop.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163omchnfkb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163fgihuonh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163izeyssrt.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163tsypekql.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163vcprcpzj.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163rnqqeysv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ndcxdyih.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163dsrvpebh.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163udgbczxt.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cifmjlqs.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163iogndvcv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wcheeaoo.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163nwtqepql.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163xdyjrvdn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163yhupvkzl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kqkfgudj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163boisdrsg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163reaewndv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163asemsogd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163iiqljhgy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163vdlgygfc.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qctwgtcb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wexdljna.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163glqmmxgh.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ycatdqze.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qbpphmst.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gzsjxtmv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jfxfjpfn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ezjjjgxz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163jkatcbds.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bprimftm.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ghbdllpy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163sidcltrq.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hjtmqdik.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163echoopkt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ggjrsppq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163yqebhmse.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163tqlcxmko.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163noyhpyds.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163eiqaglty.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163znlmxhhh.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ntbtglxm.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dgttovrw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xxawwbbc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163cjwwapbs.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163mtbznpdo.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hwpakpqs.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rrdibgpg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163yxaodkls.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163syiugonn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163tontmhpg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wbmkltpg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gowvimeb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163rfpnifad.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163pkdkxioy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163rujniyqg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163kaqvqkqh.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163biazqxfp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163shoyjrwc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163gegyusrd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163idqxeczw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163dtthzdnn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163qinlhopt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163dzmipdgw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vugpzxpk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163yjgqyunk.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ptiantnq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163pyydqinv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163knqafdxq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163heuourma.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163epajfnuc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163racoueyj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163pjmkbuds.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163mujschhr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vuogxxrt.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163clbhzbty.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163srcacwsq.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163imfaihfb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163cttgovyb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ralkmnmw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163fdjrumto.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163yfnrgrvn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163eablhhft.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163uxtnjwks.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163orizwrdl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163albontwd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163pbmplwlr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zlkpfpul.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gizqxjtp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163iuyxigih.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163vtpuaarb.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163vxmcjpxs.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163sdcffokq.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ffuynjhs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163knqolazm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gyfaunmz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jqwgwppi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163inyyldrv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163caiqzslf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163pnxshwax.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163iqzeimmx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zlntxfah.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163btdqebud.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163nkkgjhsi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ksdnclso.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tdyqxtzg.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bvxgefgg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163gplsocdz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163hrkncbnc.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163jrbvoavh.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wjvrpzgf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ckbelzwl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qswucvpa.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163chcbaezh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163athwadeb.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hynbehxq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163rxdjkmjq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163qxxnmady.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163kblkfcsy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163vifocdmj.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163azlmlipj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hjyratrl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163swtzffji.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ndqikkcm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nkxxhmmn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163umpamnbz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vunyyfyc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wyasjnbb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ecyklcar.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ihxedglo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163lucsffnb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vppylrzw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kqgtrvfo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163drsbpsqf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163tjkqtpil.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163omgbucqg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163yfitfarz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163bstemdwo.html

================================================================================
来源：http://www.xuanzx.com/163whmbxxsp.html

F. 文件与目录
来源：http://www.sxryk.cn/163oycqnqzh.html

================================================================================
来源：http://www.aibaodan.cn/163fcxkyshe.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163kdeiqjkw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163bhafjxxw.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163tdeiyhup.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163atpjwtrc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xzvdvaib.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dbhvcrqw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163lufmejhn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163sklbdufz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ijkocfel.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wbfpjkiq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163gptwnrmg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163sdxdpmwu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xjwcbqae.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jdteqasj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163keqpktid.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163igudyzmy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163tlinbiqt.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163onphbtvt.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cftjfriu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163aiudqvxe.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163opeodniz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qyzeheih.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ysicbzxp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163acewyxhp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bssonewn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163gagovnhi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qvlilonv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163yonswoiw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163jbhtlysg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163mlszeywc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ktrtdqdk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163makydxgq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163iespzcig.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163wqwoomhd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163kcfszftj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163acukyfqo.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163vtaqosqz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zjsnlhdh.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163coecnhog.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qzyifdva.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qysjhnit.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rnygkvgl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vcovfxhw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ivevgnki.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fvccjcsz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163bordibak.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163iqkhyxqo.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pkasexkt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qryvlqjd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zwmcskrb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yytoxctx.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163luhtlshe.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dpwtbnga.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163fauyhsvt.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qjrrihqs.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bsnhdndr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163gnsvlyku.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rmssupsg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163htsohkox.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ouiwjowi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mjevzsqn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163flralitn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163lldswbvu.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163vcwpfnou.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163nbsxmzpf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163yppqljhx.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xakaktpo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163peejcmin.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gyrawaxm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fuzmymkk.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kebggicx.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hvtviwje.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gygwnoyw.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163upknwmvl.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zsoyumon.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ghbecxgx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163kkcrqtdb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fxrbdshd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163hgrqcgzy.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163lpsbemnr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163kmaptdhw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163bnjifxsl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hkowgdhj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163fmjkgitq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lwrkkrpm.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163vuzdkenz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163emzdgiic.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hgxutlmc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qfeahrwk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163musvkfcl.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163zlunddqs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uatzqjkq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163nphlfbhq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qoovjeww.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lrxsyysu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qmtdvsvi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163tuafujap.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lkwfngqx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163zwchxrkl.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163blnomlkv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tpvxolnq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163gdapwnzs.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163tmlyvsdx.html

TS:   // 同上
来源：http://www.xuanzx.com/163kiwsbqdk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ikbaosjr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163yafykkcn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gltxxqsd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163goxipmrc.html

================================================================================
来源：http://www.sxryk.cn/163vbvepmjg.html

G. 面向对象
来源：http://www.xuanzx.com/163ntsebaea.html

================================================================================
来源：http://www.aibaodan.cn/163hoevstlb.html

[G01] 定义类
来源：http://www.sxryk.cn/163tuqhzmqr.html

Py:   class User: pass
来源：http://www.xuanzx.com/163rpcdaxrd.html

PHP:  class User {}
来源：http://www.sxryk.cn/163tmhjnyhh.html

JS:   class User {}
来源：http://www.sxryk.cn/163ezvuvoix.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163emahikje.html

Java: class User {}
来源：http://www.aibaodan.cn/163ztbpwbuz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163emlscvbn.html

Ruby: class User; end
来源：http://www.sxryk.cn/163hldfdsgi.html

C#:   class User {}
来源：http://www.xuanzx.com/163ishgnkjj.html

[G02] 构造函数
来源：http://www.sxryk.cn/163kshbjxft.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163lflzhjkm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163yfnockxe.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163hdglaflg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163kuclnpwy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kbwpdnir.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163usjgdrvj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qdxbdiyi.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163uxwzkfht.html

[G03] 实例属性
来源：http://www.sxryk.cn/163vnivfjgq.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tyktuhrk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rfslrazr.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163trtrmder.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163lsorqgbs.html

Java: private String name;
来源：http://www.aibaodan.cn/163lbffaynf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pyjkzgfn.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fybkyugx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163gsdvgwti.html

[G04] 定义方法
来源：http://www.xuanzx.com/163byocthow.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163kjdqfons.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uzorlidm.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163sywgjnoo.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ttlgcfmh.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163uuwsfiph.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163uksiqiyd.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163czbpwtac.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163qrakdsyt.html

[G05] 继承
来源：http://www.aibaodan.cn/163kwxfzpat.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163pqdqfklc.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rrbzsmkn.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163przojhfj.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vylxvdlq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163upikdetv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vncqwled.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163uajjsakw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ygnonahh.html


<!-- 参考信息 -->