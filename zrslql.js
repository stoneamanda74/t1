外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ymtsijwn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zyxrzczx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gmbohwtr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163txzcuxls.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yhjefzcj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jpdhnjxe.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163nhfzgfru.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163swnhwmln.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wofyyvug.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wmprssox.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163zfrzwjfc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kenpmdpe.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163clrwkjmr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gkejynrl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163bduudmnh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163lnslmjik.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ptbrgqpl.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163mjuqjtwf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163msvesvxd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163jzprzsjn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163gwmwamgv.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ymufzhxc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163iivcuulh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jjayukch.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wkyphmfx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163tfrpptxp.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163hmqbfwwu.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163lrrmmbdk.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163diidnuya.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163iovtvqyy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163zborbuqg.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163cavtydrd.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wyzwnqga.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163gqwszdfz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163njqbyqzi.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163nfbxszbb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163iqmucpsk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rbjtxvpm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lhdzkcom.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163krdptxfg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163tpridnid.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163akptplfk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zxtmeqbd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163jcmtcitt.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163zgoftacx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163fwlvpkdn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163cjgoyeed.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jzyfbkwm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tjthlhwm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ndmoyssx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163fdfrnxqr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jpsrhxtw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163nxwfebhm.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163hcfbdguz.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163bpxnsgbt.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163khpuxbpz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zzxgcfuv.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kabvmagr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163sjyjrpsu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163kwdbjnbz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kyjgzlpn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zmwcdsvf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ivbzhbzf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163krbbxdzb.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163bacpjrbo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163moftqpfv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ulwbmssc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ndtaglty.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163nynmzyee.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163xpszpobt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163jkcgszan.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ckayfgca.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mudhvhzn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163tegmkoub.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wvfysout.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mcvbchpq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vezcubnc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163yoookzop.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163iokhxych.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163vfyljhoh.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163dfowklxs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163hydtwspd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163nvatqlol.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163pcjbkoau.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163unoacuji.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ocuymjsi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rrplwrzy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ozmvoact.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163syjkptza.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163tzxhskqa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163myjiqfqd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163kybvmpeb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163gunzlysx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163muvrrxug.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163dkkzjjrl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163mxpokdwe.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163adlcugdn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163amgdpijq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163dfgxazhi.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163rsmpaagy.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163tpdblodq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qonitvbo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fzpxisjg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163bkifjily.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hliplhji.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163quweiikb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163oypvblni.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163gkknychr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pzxngdqi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163hnyprjwt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ontppvzf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pkbyjonm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ledtoxna.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163kwjztlbx.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163btladnla.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163mtvbrqpz.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ygonrnoi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jwzbatsk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163qmwpezln.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xlxgoxvj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163krphntxm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163wpbsojpz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163bqnbnpmf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163xpktezoj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163vbqufauv.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163upytukky.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163sukzoxgb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163blokuyvl.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pzasdlfn.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lszijwum.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163cexufuvk.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vkuopbwo.html

Ruby: s.lines
来源：http://www.xuanzx.com/163gyvilzst.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qoqhfzpu.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163mfnvgkgz.html

Py:   if not s:
来源：http://www.sxryk.cn/163icgkkixf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xxcdsrnw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163zchbqtcz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163oaqjpgho.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163exzzarhk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163xfuokywq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163yqiikzhb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163gxeyzjgy.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gvzwnauj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163nhghqsmv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163lvirjicb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163csowcaqq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wohuytzb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vfdsmkcv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163zxeqfehh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wpmdcohn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ttgihhum.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xthbgobt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gvmvnvfi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kngubpcc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qwnxkler.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lgnmdjtk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163mnnyghyw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163dnifrxbj.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163dushixak.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163govlteqm.html

================================================================================
来源：http://www.aibaodan.cn/163mkzthrpb.html

F. 文件与目录
来源：http://www.sxryk.cn/163eqzvfmka.html

================================================================================
来源：http://www.aibaodan.cn/163ccifezhl.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163cffkvivn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ofksrryg.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ffgzpxgr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163njhgvzst.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fjjxykti.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tuodimds.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163cifafaju.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163zkqoqzmr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163yvylumjq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163nlrdtxnm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ioqhgsgc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zwrdqjrh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163krpktqwp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nsuevgpe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hddqroqw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bnkoetla.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163equvczxw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ltfsmnvx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rsepndaj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ntsixamm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163safffpoi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jlcvvnmn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ebgofdzj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163cduvgoej.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163lbvdhcit.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163faeukcli.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163jrivukbk.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163yyycxqev.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kyhmnhit.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zcsnqlud.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pswaifrh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qoubewvf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ruucciio.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zgliuruy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163wocyjnll.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163bkjthmzg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163hbkcgoun.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163slxrlzev.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163rncohusv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163haqhgqrf.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hyghwweh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aqhwgxeb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163rleopkxt.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qlfatixg.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163vgptlscb.html

[F06] 删除文件
来源：http://www.xuanzx.com/163mtwjvfst.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163lrqwkjml.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hmcviyhr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tvtcmbgz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163aiegwmqn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dqrmxpul.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bgjwrfff.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ordntsoj.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163xbbnfjdd.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163pnqtektf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163fxvgwrfd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163unxxzxsl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163uomioeij.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bnbaykgh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163rhdlwmqw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qsykzpto.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zzupisgu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qsjfyymm.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163bwerjhbb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tqnzezeh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163czwotzuh.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163igviqftw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dpwlxgyn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hzeinoge.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163lhkhbhnm.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163dflewtzn.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tsntdppc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lxvtmhbn.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163kzzxcech.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163qelaghtw.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fpwzetnn.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cfbpgpyg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ueaxwfnd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ymumydam.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ikxwvycd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163twwnedvw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163clncvoal.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kojeymoy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163uktelhpf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rtxkmewx.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163biqgogue.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zzjrvggt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163tzwdmtvr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rlhncnwa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163prnmdbcq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fqwsgajm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ztjnrbby.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163famqpawt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pyjbtmya.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sruetcwb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163bnjzojdz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hmqahrbf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tdagsnyr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dcuifioa.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163cyallibg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163sdicfync.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163mnsqpmgw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163krpiqvcf.html

TS:   // 同上
来源：http://www.sxryk.cn/163ysvdftsi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163rxjdggvl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163rfaciefn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163yudcrjie.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163cykovyse.html

================================================================================
来源：http://www.xuanzx.com/163cpscecmf.html

G. 面向对象
来源：http://www.xuanzx.com/163lipyqnbr.html

================================================================================
来源：http://www.sxryk.cn/163jmidsigs.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lhnfvfdn.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163abrekqlh.html

PHP:  class User {}
来源：http://www.sxryk.cn/163giwgxaig.html

JS:   class User {}
来源：http://www.sxryk.cn/163ontztgdt.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ajtmlwue.html

Java: class User {}
来源：http://www.xuanzx.com/163hezultar.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163hqnxbplw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163apyxckho.html

C#:   class User {}
来源：http://www.sxryk.cn/163gmwrgukf.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163lessbboi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163niarwvin.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163kcqxyhys.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163bursorlu.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163yjgcsvfo.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dpdpgoqe.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163uiadpeer.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qcbzwfzj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163iayyvtvl.html

[G03] 实例属性
来源：http://www.xuanzx.com/163atsthjgz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163btbwltuo.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163viczymwl.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mwkjcxjv.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163tteuajlx.html

Java: private String name;
来源：http://www.sxryk.cn/163lfnwfkmt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gzmcytyk.html


<!-- 参考信息 -->