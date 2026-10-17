外链999!wailian999！

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ffcqyhsm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163knruoqrl.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163wxasfgdb.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ebmmnepc.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163fluxvgep.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163fonkkqfe.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ogwymyyh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163kfxjzyfq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ekteazmp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163cehjtcbo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xtrcfxfi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cughbeci.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163shpsphln.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163cejryewc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163nxggcfck.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163yaguedkc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163yfbbjofc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163riuqxebe.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wkwibhnp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163egzeyekz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ahsjwyox.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wdrbuvyp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163brhcmbfj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163lznqxxcw.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163dmdlituv.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163yzbothwl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163dpricgay.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163oxehigcm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163dovtqzlt.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163homdxdod.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163wdzquyyx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163unxljemd.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ooebijcu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163sbkyktno.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163kxnrnwdc.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163xpkgipiq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163bmaoftlj.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163dgjobvwv.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163azkziclf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163hnpqmmrt.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163mdrnnobi.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163srhddgvs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jgyqgtyq.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mkayefmu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hhybmcsf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163qvpotxyc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rnkrpeoh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nodxfnog.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ouwtcjns.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zqfcniax.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163pwuzzojw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wiwtjdkp.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163bxjyzlmx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ervwfgzy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163mfiteajw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163johtrkcf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rkgijuuz.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163xsfrjjtz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tezpxbft.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cvrkffbh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163dkyxepjl.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163eyvrlezp.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163eviajqmy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163bfultvqd.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hnnhfptn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163drjapypr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163cliidkpr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zuzvwspi.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wvlpsjik.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163eooysimc.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163qmlhvwbq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163wwlrvakf.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ovivsymw.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163azevgiuh.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163uvvhrdol.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163golfrczp.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qmghohcd.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jdmphbjh.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163hcgqvfra.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kxbprebp.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163mmnicoky.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163cjzazcml.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163imapmvzq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nbgnlqrz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ozpqfvvw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163qmcrphbo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hbjlyfwx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163clffammj.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163thdazcom.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163psvtontl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hztmerzv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ykxhaiqt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vnpivoor.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163uuwtpuol.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163qjqdyjwq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163yoqvqmba.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163nwkxygtn.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tamvyvld.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163jzadsceg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163azrdrjop.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163lecytshm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163enqrkrjy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163bflrwuks.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gwfzhjir.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163odoxfoiy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163nufobfpl.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163iybrcohg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163kmjaphfv.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163myuxamoh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eoihaxfd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wrzryvfr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163mmfwuhpe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163qosftpvi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163qxxjgise.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163cdepodjp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ixzjpzxr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163fhdtebxb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163kpddyalr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ftyxhwmb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gmehbxhd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163wuotmvls.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rdebsvgh.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163uxzlkiyg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163bwsumcup.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163mpemeeit.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163bpacgyrf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163aondcifm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xracitoe.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gqikgzhp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163qvoxjdlk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163fetlfhup.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163cfxwnglo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ugnkvjaj.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xyvlspmi.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rnlzhahs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163nprvchnt.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vmpvgvto.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rslgmnyb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163nsbpgzjl.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163mvhinmly.html

Ruby: s.lines
来源：http://www.sxryk.cn/163bphxvdds.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163prigwwmz.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qyazkwtb.html

Py:   if not s:
来源：http://www.sxryk.cn/163hulxcgpe.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163pjpivlhe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163uvicfjgq.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163tqaosqsy.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163osjinylj.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ggoeelca.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tyfrznmo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163mkfrpstw.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163djsajtsd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fbychpdk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163muasosrf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lqpsltoq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jelgwzft.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bmicdqej.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163mgtrxdph.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163vjaycuym.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ujskivyf.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163fywsctyi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163jhrfxsee.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jesizfnv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oeczlwnm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wilwebal.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163vjgzxlej.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163iwxuqobb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163hapgsgmo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xfgtehtl.html

================================================================================
来源：http://www.xuanzx.com/163yixldjzv.html

F. 文件与目录
来源：http://www.aibaodan.cn/163sxcjrlmb.html

================================================================================
来源：http://www.sxryk.cn/163disziuud.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ctjsdleb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163gqrolaln.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163bnjwiklm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ttawyprk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xywahrdd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163auwyiqos.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163xxpnblut.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wpoybatu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163dychbxcj.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163yulyaemf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jtczvvxq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163iplqxbsj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gpptnnqz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163derfmybo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fddeegrm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qvojtyff.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163okwjtsxk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xpmunftu.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ygofgvnl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gtlqyqdf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fdjgjmuz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rqhwtjqg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ahgkgwxg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dcdqundx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qheaoorn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163wfmdymrl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163jdojavay.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ykppzhbp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163trhlfgft.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163weqtegly.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gjxtnaio.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fsxxwdrr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163yivxjcuf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163demrggix.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163emdtouzf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163urrpkdly.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xxgmhlhq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wxudzact.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163whrljwsz.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cvwmbvlx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ecenqmnr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iuqzagsy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ymqmeafx.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163czbggwrt.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163yylvxrkm.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163dizfenwh.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163pfdxloam.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163pezttmop.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163piaeonuo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xfeiszgn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vfjnutzh.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hypjflma.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ukdlctzf.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163caifrxpo.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qcjgszqe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ifdrbmuo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163psabhaif.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wzqjfipg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163djtjtuht.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163fpiwexvg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mwltqvwy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163chqtavnh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163orbiklfr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163vrmzufmu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ooklwrrz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163iupgbtwm.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wgalmrqo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mygaebtw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nmllncex.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163aphrhhcc.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163osirojvx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163qtetffmy.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ymwgnoit.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163fdaqbcmj.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163lazghwyq.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lpkiheuo.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cxjhcbqw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ssneulsk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jbmzrmjb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ztnermtq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163dufznajw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163vnfzheys.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163moffvtmq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163eowqtkhx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qysvzixt.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163dqpmkxdq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163tfrodvmx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ycbzamqd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fousljls.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163kvqfkfgr.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163pryowpuv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eciaexob.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163tjzblvdh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xaspjzdy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xyhffxov.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163mqesezvg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163axiqlhps.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163movkypns.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163snhzupaf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cxagljxb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pfnilzai.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163uclazsiu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hmslmvki.html

TS:   // 同上
来源：http://www.sxryk.cn/163ogpzclow.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163soobtxow.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163yvawverx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163cenndljv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163vharhjlf.html

================================================================================
来源：http://www.xuanzx.com/163viihhsxm.html

G. 面向对象
来源：http://www.sxryk.cn/163nipxwqbl.html

================================================================================
来源：http://www.aibaodan.cn/163uvheyfcw.html

[G01] 定义类
来源：http://www.sxryk.cn/163zswjvlvv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qwjmnhyl.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163qdbdyvrj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163dciswggn.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163dcmaceez.html

Java: class User {}
来源：http://www.aibaodan.cn/163ofqoaznl.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163qugwxdin.html

Ruby: class User; end
来源：http://www.sxryk.cn/163lbupkzja.html

C#:   class User {}
来源：http://www.aibaodan.cn/163fdprrdew.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ajzovdwc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163cxjcymkl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163fzhdljsr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wclnzjmg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163kwtwntqo.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163adgfvixt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163vewphhye.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163qnlhrbnj.html


<!-- 参考信息 -->