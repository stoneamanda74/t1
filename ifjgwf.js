外链999!wailian999！

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ubglnnde.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fmqolnix.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163rrbnkzkf.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163alfryrah.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163hzujahnd.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163hsbgiwvd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163broljlvg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163tysgjpby.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163eejdbzcv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163oydnkdsb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ljjzbdxm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163sapekupi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fmiudcem.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163qbpdaayb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xqkcjlhd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163dmqqpjiv.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ohebzmpl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ebjbnmbx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163rewlkdvg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mqjbenkq.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zkwkuera.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vlvabizg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163vztfixub.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163etxmnmfn.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163gvdqgiwo.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163eixehlle.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163adibuqbg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163bfvhoigq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rbnnzkoi.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wniualud.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jcblgius.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163gofbahjp.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163mmntiifi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163syapnrxv.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163kmiihxht.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163cmtvzqds.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163qtndvahy.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ywrehfto.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163odkikdgg.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ugqljcfj.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163rvsnmbcs.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163abasphgr.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163negxelgr.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163icfbeabt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gqnhurkm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ttogptxd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163grpirrir.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jvbhhzzr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ftxsnddw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tpotykdg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163hculalsj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163excsdmfn.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jqbkefkc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163tmfhvroz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163fcjavdla.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qmhgdeyz.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dhkdbxfd.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qnettjum.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ltetlcsd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ybnkuvqq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dlbseyko.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163elcensvm.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163dyfzglrm.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163nlowvhtj.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ucjtmttc.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dnaiqxlt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ehwanheb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ajjtvzyp.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163zqpkyepu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163isnideoh.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rxcepsoa.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pspwfspg.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163nfappqlb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pybbvofz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vihxcjle.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163mxgywuol.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163rooakndf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163naxcsnoy.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163nuiesqol.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bvmvrkub.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nkapbbrr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163vnyknehr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xnatoiuj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nnptwqgv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vdfmfcsw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163dwkogiaq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163yunnfiln.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163kvsanyaf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163pcvkyuiq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163danvvycr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163tvierwxs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163mpthhvve.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163prbvkzkn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163tvlqnqet.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jywdriiw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163yhzxybtg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163pmvclzxv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qqqjwlfo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hgwnmhzj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xedcqxia.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qghuqwsc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ojdrpicu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163itvuhiqo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163dmolpfbv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bcqhpjao.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wbrarlko.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ggoulkuu.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kwaqntsp.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163kvwpvpdy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163toawdsdz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163waigrsjd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163nfqgekkq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163eqnybgyr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163kgyddgmt.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fngpfopo.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wueqemru.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163exwsclif.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ccvwrzax.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jieuaekf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vdudtygd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gfknfajj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163iyyzpzme.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163narqcwee.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163orkjpvap.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163wnbkurok.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163aixmowti.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gasacsin.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163uhxjelmh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bnltnmln.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163qzocswyh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163wzjoybmx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163tugrunzb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163aqwouhua.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wuopxqpm.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163qhjaoicq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kwqbcxqo.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163tsvpoepf.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wazuskvm.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163pgvykbbn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163tddwhspe.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163rrjxscsx.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163bogmsegc.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163gsdzcwey.html

Py:   if not s:
来源：http://www.xuanzx.com/163luqhgvci.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xmmeicrs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163xkzqpmvv.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pnoaxhqg.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163rjlembeq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163lnnoytvp.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163htkupnba.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163kavmzzdr.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163audezani.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163rptndbai.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163voreppqn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xzuhofeu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tzrubgzi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163unjbjrjm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163pdsileko.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dtnwmlwc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163npssojsy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wapjznwm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mzhlqlqb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ornauqrh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163crqazbtp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hvjwszin.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163smksnuxc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163lfubrbwu.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163xtovwktq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163grnlwrmx.html

================================================================================
来源：http://www.aibaodan.cn/163qxojkiwd.html

F. 文件与目录
来源：http://www.sxryk.cn/163woscgxmk.html

================================================================================
来源：http://www.xuanzx.com/163qbtontza.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163xqsecbdg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163wlyisasf.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163giuysdfu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163iizxpkez.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ybuxgnyb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ookwabjp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ymqprqwc.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163nuxhwyzz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nobtgcnp.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163fymgttdj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163jninlnbr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163arannpdz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xsariqzj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ujeqyvzq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163svgpprgq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163wyztvtkk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163yhpknhfz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163mvypmpwm.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ihvqukhq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rvgwnzbi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163fnazooae.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nsctmdbx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pauofodz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cjstwvgc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163jzubtnxt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163wjcozzfw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163cpmbbfpm.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lnihwbvl.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163gfutsfur.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163kpdmiirk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ltiweivs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lnuqdzjs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163giyssgyn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163szrhzmed.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163hzfcmdgl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wbfualoc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163hmkrjhhs.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ymgcytah.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ynbwgzky.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nmpgwiau.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pgzqkyfu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tkdzbeeo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163lpuiegic.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163elclfbcx.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xbygnyuq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ezeazpav.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gwpysqyh.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qpjyxtnn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163naoqkhyh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rptffewa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163njcsznap.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gruxtavn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ckpnehfu.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163adlstqoz.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163iqbzykgx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163xqvwoinw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163iruvmwrt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bjqheikd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qeqxrtao.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163unszqgbl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mtcrgqgq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163muntsdvz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163onfzxsri.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ueuqmxkc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bsusagcg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jikxewmp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zlmzvyqt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163evzfvedw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nupvfhzs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163jmgrvgza.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163gefuryub.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tqlgjesa.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163sypguzov.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vvvbjysy.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163uvvtdbmw.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gmkbshme.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jcnombtd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gnvlmkar.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jwdxjbet.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163teiqzhdp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163nzthtqsw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163bxsjyddo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xcacwvhy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163nnbqnwol.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163enhhsadl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163cllnnyyi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163blcobwok.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ndgqnrgp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ldwduhvl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163uvpoggjs.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163pdpgiezq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cnleqlvl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bvbajbuq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nadqzxxt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zyptzxxe.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163axlokmve.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mdwfyqsb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gfrswlor.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163kfjirdrg.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163cxfujsad.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163oybhlrnt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163evdtdzqo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163taukfflh.html

TS:   // 同上
来源：http://www.xuanzx.com/163mnybrbux.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ftzilvsn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vgztjtyv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163gqwqwcyy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ziscxhgr.html

================================================================================
来源：http://www.aibaodan.cn/163sfxegfne.html

G. 面向对象
来源：http://www.xuanzx.com/163lrjnnozn.html

================================================================================
来源：http://www.sxryk.cn/163yloqwsue.html

[G01] 定义类
来源：http://www.xuanzx.com/163jvzltvoe.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ydlpvmua.html

PHP:  class User {}
来源：http://www.sxryk.cn/163srpnksnr.html

JS:   class User {}
来源：http://www.xuanzx.com/163ozwibgtp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163pqiuczbi.html

Java: class User {}
来源：http://www.aibaodan.cn/163xthjknbz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lehzpsth.html

Ruby: class User; end
来源：http://www.sxryk.cn/163hjipmbtz.html

C#:   class User {}
来源：http://www.sxryk.cn/163xjlvsbmc.html

[G02] 构造函数
来源：http://www.xuanzx.com/163wylsrylh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163owooacvn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163efwbropd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ccxikqmb.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lvcyfrlf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163oulaulih.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cmdmosae.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163atucczyb.html


<!-- 参考信息 -->