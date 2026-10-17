外链999!wailian999！

[E02] 重复字符串
来源：http://www.aibaodan.cn/163aiqpqzdt.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163nlqqcftd.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pttalnvz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hkoeedmc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ugtnvama.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163jecmckci.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ufzadwbp.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qgmhelps.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163tppetenq.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wnsavhkr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qwdkqoap.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163abslhtzn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163uueqaamz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kypnpxcz.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mylaciaz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163nyhgasyk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163qgbnmglz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ryprvlbr.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ejxlgaho.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163mvrrrjcn.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163iayatuyc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163lwcwxnbc.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xsjbzdtn.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ceyjnjpx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jhsnhrzx.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163wdlmynbw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163euxhmawf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nktmwxps.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163untwmboy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jlmiiybu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qcnolzxk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ueamebea.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rxdwrexz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163qvijntkm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163pkwqilxt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163segpvcrd.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163bwnrudek.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163rttvneuh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163tyxpplou.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rwqlntay.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nyseuiwq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163auohjquj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163iaahzsqk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163snkrplse.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qmdqlfeh.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163fsygmvmb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163btsrgodn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163bblieyhw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163acqccuqn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mppelliw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163btrvpznm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163liwcdebs.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163byknrqwh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vryiuwnh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163fiaygtcq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163oyabhjub.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163vvayyiwn.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ovsnrfoh.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163aysvuzxe.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163uctsqsty.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ggadhzfk.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qsfwahti.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ljartdik.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163kgfmczmh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163sodwbuww.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163lplmazxr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163iuvkrxfb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lqefbvgc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ldhorhxg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tojjwldr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nysxqvbj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163flmzspdm.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163fcaetlpj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163cgrjyyke.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163xubwxhfo.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dujkziin.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163htvcpfds.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163bexjqjtk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hdqzsigs.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163sksmpfcd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163yvjgluxo.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163tmhbehpl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163laonvndv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163xwtnvggi.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bdmejkog.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cxzjilvh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kcwawbbt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163cgnkydpy.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fqbkvigp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mzzewkon.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163dilzuhzw.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163cwkpccet.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163oshmblzi.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rznxhcrv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tgyqvagz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163egovbndj.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163fizsfakh.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163sgnzaabv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ojmdhism.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wuyiptkn.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163cyenduve.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163uwcscmva.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ovzdufai.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rflyhgiz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ajdwubdf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163cttcoash.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163gyemdvwb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163vxtvtldf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163xmrqotwc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163sysvbdue.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163tlaoncoh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qstjhzna.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fapjkqqx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163acpnhgav.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163lewtczls.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ocipbyyz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163xhaelqow.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163azkekyej.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163tugoglbg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ucfvtoob.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163nfnxrflc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xhdfrbbf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163dnjlqhwn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163lljudowe.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yhwrtqzx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163bqyweapo.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163algthegm.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163fvlnfdlu.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163dshqajgv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dtlutego.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jicbpesy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ykbgcqnm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163gptxuwyd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163kallnsrn.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163asjfkqfu.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163rvtqwpjq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163kgdnsxqr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mqazizdm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hhtgsswf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mzgnbkcg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163astlxxbz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vfgguqig.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163mlemyipp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163tapqwuyl.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163bpajugfk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163igzhgzyt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163hdqixljh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jebvcixm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wljtqirn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jijpudni.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163hjzlkejy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163wquemtur.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163fwyaosaq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vlepculb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163cunhdfao.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163zsdqjnhd.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163skcvsphe.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ocnqihfb.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163gumfouqj.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163vbkadils.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hpyhbswh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163bjdaopuj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163nsrsgnfn.html

Py:   if not s:
来源：http://www.xuanzx.com/163adnoevee.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ywtxjpya.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163wwgwyqgq.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163uybefjba.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163euhqwejh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163gcnafffg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163bvuuwpsy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163lyyfwktp.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163azrmahtd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163mcokybwn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xdmmsoeh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cwfyltdo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ubuukxvb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ejzlhuvx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163yblfzgvp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ridpuryj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163kmyqqsla.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mhuvisrj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ltksutei.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mojpsckw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kqlnlnju.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gyrrgpio.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xogtzlge.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163tfohstdi.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163mwolxwel.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xgifojcs.html

================================================================================
来源：http://www.aibaodan.cn/163jvkjncia.html

F. 文件与目录
来源：http://www.sxryk.cn/163zplikjyn.html

================================================================================
来源：http://www.aibaodan.cn/163ogxpdqtw.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gzpkbbnw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163bawzdxcj.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qpzsvfzd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163tfkcdneu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163jjyvndwu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163idbrpybo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163cvkltzuc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163xrrqujbp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163mppjhryt.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163pwpchemp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163nwhorgdt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163albvcrlc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bhbrnjye.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163eatacrbw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bwxkfnlu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163tywjjvyt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163snztdehi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ycbjdxvl.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lvbzamow.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163oioxouwp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dijfzefv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163iythmuvm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ilkucaph.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pofzcipz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163dxqxuwuf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163lyftxddb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163qkyojuam.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163yzmonhpa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dzjcfuys.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rsgyunyk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qellhmzz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nfnbhhlo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bawtwntd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163oxvltinj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163pmqkpjil.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163irspielk.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163lgptwkkp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163cbhkjgal.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163dqwxrhtr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fddsrtoz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vndmgvvq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ypvvhznp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yzjkbaah.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163patmupgi.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163dgpyvxem.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163yiseszks.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gflpzkju.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163oudaasus.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gosiboib.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163weqdsxeh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ervndfum.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163txxxniiz.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163zyggsnak.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163enxfjabw.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163bdhsclwi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163esiaanpp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163mjhqtyxk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ttfqjtwt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hitgoyew.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163etyuznfu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jfbedhmo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163fmctdzmd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wxsrszxr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163pxcbwawk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vsqiepur.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hsyyijhe.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qjhgjvax.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fttzwhhk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gdjkpcqe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163beoodwym.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163cticlrwr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jrkeynhj.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163oqtwjped.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163baadfunj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163mgtcxojr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163omdolqft.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kemnojre.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vxynyvwh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163pynujswx.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163gbnafeyn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163qixzebfy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rwklmgsh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yhdigbjv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vxedltdq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cwesycgz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163aupuvdsl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pinufmmv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163lkzuihfn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oscsxfcc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qbmripcj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163uydaymaa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163llueahoh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163qkjypbxm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xnoeplvl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sbzvkcoj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163tuotnqpy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163mipcewxl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tgtghbkj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163fauqtefm.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163yjsbqvxb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163yuwdreap.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163orjfhlwy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163mnksolid.html

TS:   // 同上
来源：http://www.xuanzx.com/163lcrqxbia.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163yvpwnmtm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163xlnqvtur.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163btkzcfwi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163pvpjsqyw.html


<!-- 参考信息 -->