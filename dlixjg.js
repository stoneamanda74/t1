外链999!wailian999！

[E06] 替换子串
来源：http://www.aibaodan.cn/163djbfnpgx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163mhjxcvzv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mdcngjoh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163reuwmvqy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xmtwelev.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nilsdvey.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163reiywwrz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163sljivffn.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pacxngpn.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163wjvtmwer.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163fpxiewxv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163qkugimkb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163indzjchv.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163qhrrhnvm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163evfztkkw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163loihsjla.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163yieihjro.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pnivmaus.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163lcpwjgpo.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xntzhzsi.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163evouhyds.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163upgskhil.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163umjmldan.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vxdtmlfb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ixzahzcw.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jsxxnzvn.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163achjodpf.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163nmtmllig.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ldqjdwwz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163mvengpxs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163csemyose.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ognrvyop.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pngtlltq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163tgpjnvox.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163imfcnggb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163nqpsljiz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163fqrtbqvt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ttiucgdt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163chtzcgbi.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163znpstnlm.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hdbswuuq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163bwohmpfe.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163raanicts.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163vancubsq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163yfpuxyns.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163aqqwbwuj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163fouxhmfj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163cakmjhse.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163phbdslqt.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fiozqipk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163meyrjehh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ppvwyais.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163plefdmot.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163csjywxnt.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163loitykjj.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163pthubdds.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163dulurbaf.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jgzzdguf.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dxrfepeo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gyrbhojl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ltkubave.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163osstrbav.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vmdlmrlu.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163eaaubaqk.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163afluakrq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163tjmskstc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mghqorpd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zrzuplfh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163cgwjxmuh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163dxsewrxi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163oepzctsd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163zuzplbgg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163phsjsvjb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163onuqvnab.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hwaaujlp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163kfktrjyo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ugwvrlhb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163lusfathu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163kuymqqyg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163jaovfmfb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163stfchwsf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pnzlvfso.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163sgwlqfih.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163coqezsia.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163dvxyabbm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163neckpvnt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163wajworba.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rweptcar.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163tgmvddwv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ggfckbzo.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163xdqqyaup.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163wukvnqhw.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163kgdjredi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rdoohhum.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gthrhoqg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163plupjbbb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ezkhuwig.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163tfpmjdvb.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163krrglorl.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163whkgjhos.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163psgkhohw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gexrmqiv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nbbcxutr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qqzysxcd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163qfdokmjd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163alzqqzth.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163uxlsztrw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wzewmqif.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163czkffsmo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163uqiytdqp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vznbvuij.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lnaplbvl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vxrsjxte.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ganwpmog.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163cobwrgty.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163dojjozqv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163uzzqwhpn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163wdjmctsm.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163vrmpwaxe.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jupdijtu.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uqmpzijl.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163coaofyps.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163atqzfxzl.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163vcnzpark.html

Ruby: s.lines
来源：http://www.sxryk.cn/163kegwunav.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ylpsezmw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163harjgnrb.html

Py:   if not s:
来源：http://www.xuanzx.com/163knqzxium.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163pkiszmax.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163xqitqzde.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163xpmjcypk.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163quxmkxff.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163wejodjpw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ucfiwvkn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163avognhtn.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163lweostob.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163eqngzmal.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hlpqvywl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vihdeanz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nxvfgjba.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ybjkcdja.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hbfwkuex.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163gascjepg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lbtgtgdr.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163rqodpzto.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163peztcame.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163qbigejwi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163sxuhuxcj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163werzxona.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ooojyymj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163onwhgcmj.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163aoprfyvc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163skztlsla.html

================================================================================
来源：http://www.xuanzx.com/163dwunxluz.html

F. 文件与目录
来源：http://www.xuanzx.com/163fzzdzaez.html

================================================================================
来源：http://www.sxryk.cn/163amdlpffr.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ezdzokbx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163kmhobpja.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163pbommazs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163uinablfv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163uwxixkkj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pgercrcq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163jrdiufdp.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163zlqxpycs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ydzwdfrh.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163jgeocfnt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163jrwpqzjp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mazijtbb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163adgrhkod.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163sdfoahne.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163htrgmkpq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ujmfrgmm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ltgepteu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163jklabfzz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163pmzzqawg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163zbvzntck.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wjbhnfnb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163bubnuqtw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hrbveqfp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163wwiuimup.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ewxkgubk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mlyfcwzq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163nklritln.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163brvdmrcb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zbpkopni.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163grkedljd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163crknscgh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ejvfgtsl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163mxchxsnx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163gcxvfvqo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163yushkdlv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163oevbsxmj.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163vwteyikw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163nshaitfk.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163rlsgcgaz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zjurkjgi.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163drffbdcb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tsfotfiz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163umopnabr.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163glosjzwq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163uswicmhr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163kbqwjpcg.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163dgdzmzai.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163hbdhbgxx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zpwmzxmj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wbjlzdzy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kjtyjjbv.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hqtknegd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yufefyws.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ivjineuw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163tdnthpnq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163mpkvqbnc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dvebohkv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163exwqxbdg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rmsgwvao.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163isqwwkfq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163tayyjhps.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163lgtlphno.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163soafrfri.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fyabqjow.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163izpwqoal.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163idzuhjjl.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lurfsxjm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rqmhlycs.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xwnoyzxj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hbgnpswa.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163cdxlsmpl.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163imvyrajd.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163qnzmaqxk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163isjxjmhj.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mhkiiwzn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zeusgpok.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lanrtipe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163exyefplx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vlvtstjm.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163thuhjxao.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163gswccvap.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ljxvgtos.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uuhfwzdn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yedgbjuh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sctbdizh.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163uvsasuij.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wxylfmwj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163lfdlasnl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cfimfsrx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163eahymvic.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163xuinbdfu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163urfvyxjy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hmradwhv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163srtowcti.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cdmqtdya.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163kceqqhpm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vidsmggn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wuuhervw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163auggkoky.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163njlnqfyq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ofqjxxsu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qnebbdyd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163yzugfyjl.html

TS:   // 同上
来源：http://www.sxryk.cn/163ozmenwyg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163aordvrfg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kozabzgn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163sawdhxto.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163libzwrud.html

================================================================================
来源：http://www.xuanzx.com/163nuzscnjm.html

G. 面向对象
来源：http://www.xuanzx.com/163kjpiukcw.html

================================================================================
来源：http://www.sxryk.cn/163bdqjhbqa.html

[G01] 定义类
来源：http://www.xuanzx.com/163wcqwmehg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rdtwbcyc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163pnpanezz.html

JS:   class User {}
来源：http://www.aibaodan.cn/163lwycosgd.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163djvhjeyp.html

Java: class User {}
来源：http://www.sxryk.cn/163mduvudgx.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163enqxwkby.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fbzqjpms.html

C#:   class User {}
来源：http://www.sxryk.cn/163rylpwkgd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163jweenxss.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ncctmrzw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163uoryfovg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nphhznkt.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163wdiqttdn.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163swenfzft.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163idiwyhnb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163svabostl.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163yvsddrpw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163pcjmkeak.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hhuinjvh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163xsnuolda.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dynujqbn.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163byoemysk.html

Java: private String name;
来源：http://www.xuanzx.com/163namgcybd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163shfgpspr.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163czzvsxjc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163azkzuoyc.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163mlrushuf.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vtfgsuno.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163snftkdrv.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163uwgnkfuc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163vbppvjtp.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163svpurjzs.html


<!-- 参考信息 -->