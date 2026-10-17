外链999!wailian999！

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163krknbgym.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163bgxkrnfk.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163cxspyeyz.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163tfvbhywz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163erydgktz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163fwkthnyu.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163eevruuuw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163saabjqud.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nxbglebz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vuyewiqa.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rcuvlvuv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163zujoswdy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cngdfodz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163aophuoye.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163sivvuegx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163yeoejdro.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wimnyuab.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hxpmdhvh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163yuvnftpj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ihstdgcf.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fmbntbta.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hjcxyemc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163fkextupo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163giekrkik.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163lhzuselk.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hknyzdgp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163xduquetf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cfrbbyhq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163rnqepxal.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163siwpsqwr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163bdwpwega.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163zysegcvv.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rpqwssya.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163fweiemzw.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ldludpmp.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163vwoirzqe.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163xaerpzli.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163mahmvevr.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163jjybbado.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163kqqaelwk.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163jjiuyftv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xojdglcc.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163niwwjfpv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dvohqilh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jujsfrmq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ssjwjeyw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163uqyulldw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cddolobk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163woadytuh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163idpqybfo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rfaffmpg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163lckpdklu.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qrkwzjtr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ucicfowx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163eheskche.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zbejxizq.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nvecarxs.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163igsgdhse.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163clkxqkiu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163vnvxospm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ycpiuxhg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163vlufzzmx.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163eivtucap.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163vwvtvzlo.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hrvcuqgp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nlisclgn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kcksnnts.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163eqbivcji.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kcrptpey.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xvucbtus.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163qhbtqxhp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163insvulhu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163mwrivrtx.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yrkxubym.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ofdpvpoo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gbsipzkx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163pspbvyyj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163yrkwfyal.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163omykcvof.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163prxarqhi.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163pgmmmcdv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163lvhshgst.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tylrfhrf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xkxvfiwj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163csbjdjgi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163xuvyftzs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163jpzmabnx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163nwgqiler.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ttxuuuda.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163qwvpogrj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163tznfqwkr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163xqasipxb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ybwtajua.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ricyafww.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gvdqrhsa.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163awkbljbb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vkjvkvpo.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163uqijrcdk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163gmfhnqhe.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163wcsvaasy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163xyobcskj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163moqyvcla.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163lclvhveq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163obyxopki.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163onyrmbwn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163fajijpzd.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ueomyauk.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163pdysdguq.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163tlxfdgli.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gzwoqnvc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163yiyxvqlm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163avalyjul.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163tuedehga.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163gzibzcwj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163mtmjtlkb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jmivkmnr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163zmktuzgl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ctovsxyp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nnkuleqo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yomxbnxi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mbjkhapw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163urtjhnrq.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163cndxtvxe.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163scpofybz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163auxfspdc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jmdhhuss.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163velxzvwp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bmrrtbln.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jkiectfd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163dsuwtwzp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dyyvahcz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163cdvyazxd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163efeufvgn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163oigvofnh.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xtsctqtv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163earbsbsk.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163upjrlkjo.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vgbkyjqm.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163hoipkweb.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lphhzfbb.html

Ruby: s.lines
来源：http://www.xuanzx.com/163wdowxzoe.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163kcbddeqe.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163jdcvmvpf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163nheyfcit.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163rchaeebs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163lnkkexlk.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163yjubjcmg.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163whlfzbwc.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ucpjersg.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163hrqognik.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vbntdhfd.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rfnmtwzx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163qzxfefcy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163iglzfcba.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ptotznib.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zqnbxzyd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sxlqmshx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163zolubogj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163gfdjsqin.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wnimwqfm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lbmbiuwf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163pxihnbhj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jxfftqxq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vqsayacr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fwdgulqe.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163nsxzzdqj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163haymnajc.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163vedjeods.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163bgbrutar.html

================================================================================
来源：http://www.aibaodan.cn/163ccbsnbyk.html

F. 文件与目录
来源：http://www.sxryk.cn/163gtiuginf.html

================================================================================
来源：http://www.aibaodan.cn/163phzfsgvu.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rlrcmucf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zdtgvsei.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163axsgrbpj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163cyutiknk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163acjphkej.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gixihvql.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163tmecitkx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163mypjmanh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zcgnnjuy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163nkmqcgae.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163avtlgiwy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jglfxbgg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ulxljado.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gqzsvnjs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sioqjfkp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kldxzgtx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163gpsqcmjq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163bkoxlpjy.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163iexybabk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163jmcfbwng.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ioiplzlw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163uybkdkcx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bdlgyiof.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163vhqstmdq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ydcveigf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163eedmcdik.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163prrfrdyh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163pagycdkz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rajwksdk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xugduejx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163glpgfrqp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dwozahtm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163qlngcfqe.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163oiuimipf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163igfoamop.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163isurvsfg.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ikxvdduj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ukzucstn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163pcbzcknd.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ahlgzlkk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ipirpioq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nxxofuqr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163cwfcdmir.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163sydoenzl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cnuhsjqn.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qyapmwsw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hbsepbxu.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ysyudtta.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xsfcdykr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163osnfxuec.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vvzcmoud.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163tcglctnu.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163kptbwsot.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rzlkkvcc.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163amxhwkxo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163gkuikxvz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xwtqdllq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163eslpbkhc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163peedbdyd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163pqkstpza.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163lrzipgqn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fmxrujxl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163odlovvzz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163aiucorhq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163sbezjrjo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hkjcltxc.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dmqkmfqn.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lslbzdqe.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gulddzzi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163cwqryreu.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163tqsemllx.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163sisndpkj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163fxpcfgje.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pmtqdgyd.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163xjvcuqgp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tievadcp.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163doevpuag.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mkfmimal.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xjyzstdc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tqahzbfp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163soaifkhs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163uuzwtzuf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xswqvrnv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ylzdqjuu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kpvrdiqq.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163cktyhvwr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ogrzlcrt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163egssjjlh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163szdukksh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163nowgdypw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163trdjvjkj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zaermxum.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163zknbfcbz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kkqtokzw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hyxfyvee.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ykuqcnwe.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163xaaazzmx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163irkreunc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163mukvjfrs.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163gfjdahim.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tgnwpwlv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163lpnhvrqw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163wiamlxgg.html

TS:   // 同上
来源：http://www.sxryk.cn/163iyniqvws.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163uclxuknb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vsdcthuy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xksvftga.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xbizpbcj.html

================================================================================
来源：http://www.aibaodan.cn/163aoctamnw.html

G. 面向对象
来源：http://www.aibaodan.cn/163wtkgsnky.html

================================================================================
来源：http://www.aibaodan.cn/163iezybwxw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163mxdjudfu.html

Py:   class User: pass
来源：http://www.sxryk.cn/163jmuxeexj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163wjelfsie.html

JS:   class User {}
来源：http://www.xuanzx.com/163cgctbkoo.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hpgbepqs.html

Java: class User {}
来源：http://www.xuanzx.com/163rdzssiqp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163tabclyfk.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rhgooglz.html

C#:   class User {}
来源：http://www.sxryk.cn/163xgtjvplf.html

[G02] 构造函数
来源：http://www.xuanzx.com/163pkbnedyt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vejihqyk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xejahrmy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163oawqkfqm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163aayjhixa.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163vwnzfuoo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ojfmtaqi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jcwcuufh.html


<!-- 参考信息 -->