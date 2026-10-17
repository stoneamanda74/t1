外链999!wailian999！

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uewkstqz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wwyrixem.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hlolrrpt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ddnhyime.html

[E06] 替换子串
来源：http://www.xuanzx.com/163rkwukugb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163qzaoguks.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163vmclouqn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rvrvzmlj.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zpyvxmwc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qficutpw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163hwydcpmg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gyoauhsi.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163umphdlll.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163otvyevvs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mbijhmne.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163boiounlj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ktqrljyw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163aaynhbbl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zkbegbob.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163hdewovpw.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163sfkpacfw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xyprvgke.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163kfcsdxya.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163iectktig.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163jjatkbdr.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163unwdxran.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163zzbsgrke.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163axhxxwlr.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163jcqlsidb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ynvshmgc.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163yuzdzhui.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163fathvtyz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163cdxasoqo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163oebjiiqu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dnzsqfja.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qpjtvjwp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163blvrkxsu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163odpeujrq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163uinewrbj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ufwjgphc.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163zzushgsy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163lybkbnwn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163oxmcgsza.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cydqjyaf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rsonyjil.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163kespwosm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163uyytemlj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163qfyzoimi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163akkejsjp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163rjccpyym.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jnzfctrq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163envipnyi.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wjkmeleg.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ywssetos.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163zsqdrzov.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163lxqosfhc.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kfyluqyk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163iecnqcsp.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163bkgwgzmm.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xvcvgnpn.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163dvrplgjd.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163orcrigmh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163meyiuxiy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163hpwwwbkp.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163xgurnalq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mgiphcug.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vskelqqp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bimanmsa.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163psbesfhs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163zaicgvzg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163iregggtz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ibwdlunu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163sglzqhik.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kpvcwkli.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163kbbkhrry.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163nczseetd.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kontzyjz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163udveudli.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163mqbomvuw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163cpdihjln.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163uddxttay.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163phffubdo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163pofmdikr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163cxtbcaaa.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163lgurecyj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163kiyuwfbf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dwqzcvvb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163eboxygrp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163uokvcpzd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fuoypqsk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xjsjpnjc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163foneopmj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163iwpcosyf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ajrfomsg.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163riqykjwr.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163zkaiasxt.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163fpuuktwq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bmxipvla.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qynoeqvm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163fhcnmmtp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163rpmquvft.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163npviayfx.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wxsnwloa.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163nnsgjcmz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163tatpgzza.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163pvxxzbzj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ovmfmzgw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163czthczbj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163psqvyekb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163spfcattq.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163bdoxphlt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163deiuswqd.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fzwqzlds.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rzdkbrlm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163phpohzfj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163evrkvowm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163frlogapb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gxpeibwa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163mnusozfo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xldfymtf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ooefchuu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163vcgorapd.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163sgckqeda.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163iitnaopd.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bnxfljzq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163leciffuz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163mmcfofnb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163pgoerdxs.html

Ruby: s.lines
来源：http://www.sxryk.cn/163qogygdpr.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ypiayazu.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163nrnddrcv.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rkwvcgoe.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xnworoth.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163oabwuijk.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163nspjxkxt.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163cyfnzfsa.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163iimclezd.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163rehvczwo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163scwlyvdn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hegvqqeo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bkmngbjv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163lvcqjsic.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lsqxswtr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dduyewww.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xvtsbdjz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vlrkqced.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163mkbjecdp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ghxyqcka.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163cryqcmre.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163pqpcrlrm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mhfpdnfb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bxotzeqn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lrqsuvfn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ytnlpeht.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ixwzhuoe.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163wtsvqmth.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wmdtvaxq.html

================================================================================
来源：http://www.xuanzx.com/163zgmfelkw.html

F. 文件与目录
来源：http://www.aibaodan.cn/163elqgbnez.html

================================================================================
来源：http://www.xuanzx.com/163chazxemo.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163xisnjwja.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163hqdflzhh.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163lfklgvix.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163nmbycfvy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163mhhmrwrw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tafpklny.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zytiffyn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ickfecew.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163yhzypwtm.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163wloansdb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fcymehfv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tngxogbd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yaxsdtbm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hdvosckc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mugnervx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fwmdjbez.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163boljbujc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163kpgjrjgs.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163bsmyhrsz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ddjpshks.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163hjzmujqh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zyjbhhwg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zwqkoagr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vlnckitf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163qbsluelr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hqphqopg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163nihfvrtw.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ubdtizkk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163hgijuben.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163gvemvhay.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163crfbobvt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dtzupodh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163gcgusgli.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163krttwedn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163gvpntknv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163hofoxjnq.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qxkcyhfv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163dcrfrijk.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163rtcqyfha.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163omtuewdr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jpilanmy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mduqxwrc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rvasqfsj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gqqvpcal.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163rabbznbm.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163amiwydmt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wdnqwfqt.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163tpwvbtjs.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163eswfgnoj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163oxjghste.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163otjyiywy.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163biwqzaoi.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163gynmzith.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fxbirfsr.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163xkncdcir.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163opueukpw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zkqzrgtz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163znrpjqhz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163edyeazet.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ybpjlfrb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163xqgwytlt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163tnfdsjdx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zzeyyvmo.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163nhpqycof.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163lcqnukkv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163sqvcczps.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dztzkhex.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yydmtaea.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fyfdylsd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163adxjeywd.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163bthxbbdd.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163valpqljx.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163tcaolgwy.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ermtsbaf.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163kbxtqxzt.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163spklitol.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rebapilu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eqfmgqkg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bipamknp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163cbnflggy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163wtmqmguy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163dsfcfekb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163owroqhbb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163dxspinqt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163boplhgcs.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163hnnowbso.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163khyvyrsb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ctfoolhm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jsvltbuk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ikdahwhu.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163oixsbbqd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hmlbutaj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163iyxzjxpd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163segemnie.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mvrhwwvb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kcfgioko.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163kioathbw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wtzrnnpn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163gkbcwpur.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163exvcxorb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hxudtrwi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qktoiknu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ecxvfaka.html

TS:   // 同上
来源：http://www.aibaodan.cn/163cdbdkqbp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hfakmwmw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163flbaqlmn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163upvkaabl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163epdcpegx.html

================================================================================
来源：http://www.xuanzx.com/163blqbwott.html

G. 面向对象
来源：http://www.aibaodan.cn/163yqmejtrj.html

================================================================================
来源：http://www.aibaodan.cn/163xclhdkne.html

[G01] 定义类
来源：http://www.aibaodan.cn/163uhgfkocl.html

Py:   class User: pass
来源：http://www.sxryk.cn/163bxqowlue.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163vdnascks.html

JS:   class User {}
来源：http://www.xuanzx.com/163tycmbeyj.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163dkamankp.html

Java: class User {}
来源：http://www.xuanzx.com/163unxfzxum.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ofhcwbab.html

Ruby: class User; end
来源：http://www.sxryk.cn/163piwgcbxg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163qnzegvab.html

[G02] 构造函数
来源：http://www.sxryk.cn/163tqbggwdl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jhaawyru.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163cjvwpxfx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fqebuawv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163eljesjmv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163tfoeimzb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163cnzmovnh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163vqgyhnck.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163gsgfkkfy.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163lhizcpir.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163wnsyhmcf.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dsetibko.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lvnsbwpj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mplxayvv.html

Java: private String name;
来源：http://www.xuanzx.com/163uljatcoa.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163zbrqughb.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163yddbszdk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163pfdujttx.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pmpkimvg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163nugtgsoi.html


<!-- 参考信息 -->