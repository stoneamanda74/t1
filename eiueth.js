外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163tfdwegub.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163yhnckfmr.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ikospgqq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163njxlyivx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163tmlwgjrj.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163rdkekoyk.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163bjifrbce.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163wvonfrdt.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wbhqtdfy.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163nxlndglv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163vkuiajzr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163rmvwehrk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163qbfcthpz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163mpzbukbs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jwkdkyha.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tyitoomy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163cfomchgm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lnfimpyz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163raclgnbo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163noowxqcf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ddidbpyx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lfnkaimj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163gdejetvw.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cqhqskge.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163shhxctzt.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163nvvucjde.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163rthdawvl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163cuqaehqw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ukmgmadk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163fdsztiel.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bgmvstrz.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163zvojelzx.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ixxdruyh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wmcdllja.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ftwobqzo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163csgkwqww.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163nhnsnrjk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fdwquxcy.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jqfcgfod.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163egvfmtgo.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qirrycmc.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hfwgpefl.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vdzztbkv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163zepvugsi.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ahbyvbzo.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163nlrjbtpr.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163yxfwwtsp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163rvdygpaa.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163zqmiloau.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ccocxxcr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163thhyfvvu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cjjkzbzr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163eqaciaeh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bcbzigcv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163fmzagsaq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163rjtsvllw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wmxokist.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163fgxgphvb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163bwigczzg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bnftiejy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163eesuazdt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hmemykyk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163xqtjthak.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ccnfnuhr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gzrzoven.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zzgqwltg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163jecyyxvm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vaflbhpm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163nxlfcivd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163luxzrcsw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163gnqpkhvk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163pmckvhok.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ivsyalmz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163mmqcahcu.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wzxzqblo.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163vbnipofk.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163wbzsptrv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aayzdbtq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gofyzppo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163usvobigk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163oiqaplsw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ragvbuoz.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163onpyawdh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vuetircf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pfdowmez.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163sxqxjcke.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jriygsul.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163svqdcety.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163kvkpcetb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163fgvdmhvh.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hoowukyl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kgdjrfvf.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163dmahrjer.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163emorzpga.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ehjmlrxd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bxfmysku.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163suoytwyg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163drkmbgru.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163jtmbwcwg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163rgyftogu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163khdmyjpq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ownhmmpv.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163feptjjks.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ywuplbbm.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163otbansnx.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xcmmzcdx.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163chpnjwtd.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163iiujsisl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163rfjjzcqr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tnkqgstl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163kwstxgak.html

Py:   if not s:
来源：http://www.sxryk.cn/163ptuddxlj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jycivpjd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rvwmxllm.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163crmmgpah.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163wzdsvzxs.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163dafebhki.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xcekugyx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163gloozevn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hhorblkr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zosuydxj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163sujpmgjb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ebgpmkpi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cnnnirwk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163huuysatn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vptwewdf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163pmfgggnt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163izubhpak.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163jxxyspxe.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163lmihrrme.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pmdmqepk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163baaulcvk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163blworptm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163zyzgburd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163dhsirghm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ptoegiao.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163pfommxqp.html

================================================================================
来源：http://www.sxryk.cn/163rutgpzyk.html

F. 文件与目录
来源：http://www.xuanzx.com/163lialovlm.html

================================================================================
来源：http://www.sxryk.cn/163yahypiun.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gidpibcm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163irulwpks.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163frghtlfc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163mfjkjylt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163cdmvhrte.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rryntqnx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163cyejejao.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163eferbqxi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zartwoqs.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ajyadtig.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163okjgkbke.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163xdafblch.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163teyhtiaz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ztapdpyy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iwtzptha.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mjomsrga.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163kxwqmgnr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zatzvski.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163chqelsla.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163sqpfcogi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xsruviml.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rfnvoxlt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kxffzshn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163xmvokydr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hvrfmduq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163yahnvibj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pahzhkjb.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163tefezauo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xbmtpllp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wofjmntg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163mzlhsuqs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sdtuozpl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163izljvkqi.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163kmrvbpdr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163lwfecsxm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163cbswgfin.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ruqrfhpe.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163tmvopbmf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163djbceslf.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pdiimncx.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163shslinnw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gtqjuiwn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kcshpbbt.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163idomlctj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163avdxkgew.html

[F06] 删除文件
来源：http://www.xuanzx.com/163zvwqewsj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163sloiavmq.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163lxugqpod.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vartifwe.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mfarjtdx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vtshoawb.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163lptzvvfn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163hkhqmgvt.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uqwqmthq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163cqutaaci.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163sqfgpzau.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tvewfvhy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163crwrbecl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163glwwaaxm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163spllsahw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163cwdcrgfe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163cwckialw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163refydfng.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163kgudiyuk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163hugsqrda.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163lyqacgrh.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xmqhmiba.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rrevvczk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163blueiaot.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163mhkaqblp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kwlyhhun.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163thazgqbn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163crllybez.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ndfzwgmu.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163nwmamolj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vpesuaaq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163czuhpfnq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163chtgebnp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163uymsldfs.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xqiwjvyb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163xrvmamgo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163titpqdrb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bjtbmczg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hkmuxdlc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163igqgpgsz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163cyjhsqji.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gtrpsmza.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163qykpvmfq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yclfyjxu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163cfamwbvl.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163arwxfdvk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ulgtfbhd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163anoiexhh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oytrwcoz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xawwqqxe.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mqdvrcun.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ztiawqle.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163njyxiofq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163yfdllool.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cbaldygf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gfvofgyr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163wmkpfuyk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163akczhnye.html

TS:   // 同上
来源：http://www.aibaodan.cn/163pxkjeelj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ionbtgqy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vvxteuij.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163iszxrqrq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163tumojgya.html

================================================================================
来源：http://www.aibaodan.cn/163jfglqepb.html

G. 面向对象
来源：http://www.sxryk.cn/163krnyhcbq.html

================================================================================
来源：http://www.aibaodan.cn/163zgdgyytu.html

[G01] 定义类
来源：http://www.sxryk.cn/163qseqayfa.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ayezqqmv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jdgbwwnm.html

JS:   class User {}
来源：http://www.sxryk.cn/163owdkqisd.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163esonkyzx.html

Java: class User {}
来源：http://www.sxryk.cn/163fxbeqpcz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163klgnqdag.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163wgbbxosd.html

C#:   class User {}
来源：http://www.sxryk.cn/163xhjrgzxi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163tzavxsso.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ajytrdzh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163bschqqya.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163iouthdew.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163suszwtlr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163uhzepbdh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163xjhovogy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163qztdqvft.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163eqirrrem.html

[G03] 实例属性
来源：http://www.xuanzx.com/163kctjonai.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163pjbkxdtc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163sjyvjjau.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163kzukapxm.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163uawixoqg.html

Java: private String name;
来源：http://www.sxryk.cn/163ndqxcagu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qhtgycvo.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163frgwfpfp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163googatjv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163mliqmvrg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163vaazkrbw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pptlyfbu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163fisbpthm.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163skelmbli.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163iqavfeie.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jxcpovga.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ukyoiref.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wsohmntd.html

[G05] 继承
来源：http://www.xuanzx.com/163guuhyuen.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163coijazhz.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ltxdimnf.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fvipsaax.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tknnxysj.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fyjmkwjf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163bippfqwf.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163wuqcylmu.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163gmlnvdon.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mfracwbd.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163jbwrdsyl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163tcfvyeui.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lkqutrfc.html


<!-- 参考信息 -->