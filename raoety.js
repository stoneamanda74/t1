外链999!wailian999！

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ixhjcaus.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163zhkozmik.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163xaxhrcfs.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ynowrvvn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163lhhqevdi.html

[E03] 截取子串
来源：http://www.sxryk.cn/163gbndfkoy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163msmlcrzo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163hisfejgl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jwptwkkq.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ywnbitjj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163pvcjssnb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163nzkkfpku.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163fzsqqame.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zhzfhmss.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163thvsauum.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wqzjomzp.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163uncymlsm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163cbiotvnh.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163mlusbefh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163bvzzwmer.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163abnlytdu.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163utwwlhge.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163jxcoqjvq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xwpmtags.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163sbpmkuyd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163mhmannln.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163newbqhml.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163weqmdmca.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jawanlpk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163tedltyvl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163orislaic.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163avvdlmwr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163skwmbzoy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163xyshmaoz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163cmkltlgr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rgmiwzii.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hjpzrjjo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tdzkgqiq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ifveitto.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ytzjnwok.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163uoeylgzl.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163snkoowyu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163arpekgum.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163hwqjcuur.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163cjlevhsy.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163oqmprijc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163iioqkwcq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163tsrfeuqm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163acxcapxs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163pzkmgbln.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163lkvnjybf.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163imtctgmt.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ttlufyuo.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hpwxuvox.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163vrnkbhue.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163pxcmiiob.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ldoqofbs.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163nxycemjn.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163bhxbxdbs.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163hfhmfqlb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hggptwik.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vbxfmayr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gsonwkgb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163bodhgncc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163mdmhnwls.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163gcrynpzi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163wwvzgcvi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163hsqlntfx.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xcmyreql.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163rhkixweg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163lzsxitig.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163izekctoc.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ghxsjvah.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jsnggzsv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163qtcniaid.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163zuexuuaq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ppdrsqdg.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163uenhrzdd.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163myjmimsd.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163zbyahzpv.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163stqqxwhd.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xnvwcgnm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163bkoqgcno.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163lriyymce.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163idaljjjh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zfqfxdxl.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163pzfbhfrb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163uqizaswu.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163pyrdevqb.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163htkxcxgo.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tqvpsrql.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ioajzagu.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163sryeicrr.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163udjqffkj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163hldvvhjd.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163vehwgnsi.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gvxqgknj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163bfjrglkv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ghmbrwwn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wcfaezir.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163peoniofn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bglbahqw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163eketgjno.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lequxkgv.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qfzfakhl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163gcjxvbpr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163utksghuq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163chgekmvb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163udustvfm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163agvoyaib.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163kfypgpsd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vdqjewtp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163oudmfaqm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163brkqdbyx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163tlmyieyb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163auvfvktq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163gajsuemd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163astoryqf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ncjvkzjd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ipoxbale.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rgdqkgql.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163szpuhpag.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163evwtdwtg.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163pjbhepba.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163oozwlxcs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vgehoczc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163zhqzjctv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ccntnnoh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163cfpsvbge.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163trkercyg.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163crwagjmo.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163dmiiwtpx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163zhvltfoh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163cbnuqenx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qkqiuyct.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hcbdhksl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163raigslpl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163cvceagvo.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jzgiqaey.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163koeklmmt.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ynpbgkta.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163zttfztdb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lubuvidt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163azxhftzq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163wawwirqr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163eiyfiosc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163mlrbtdlo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hwookwaj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163tcbkrqvn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163bquxfkdc.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163lrzufrni.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wbqjcojy.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tghqacgg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zfpockcq.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163baxwmytg.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163cotbgdoz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163utjbbfpc.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hglwuhhh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163xqbfhwmq.html

Py:   if not s:
来源：http://www.xuanzx.com/163nhvwpewz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qlxqlapu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jnpguoxk.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fgiqggph.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163dcrssemw.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163yaatpliq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ayidkieg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163twyhtzya.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163crddubdl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xvpjdgss.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kdrpjcri.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jpfbmsff.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fdyhzuub.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mnvwqkoo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163smjfgksw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163urvqhpwv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163gnikutjr.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163xznxbaxk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163pvqwdlip.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jjmlbzvc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163oibvnkpf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ocuocrub.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163kljxfhyq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ftxlaoaa.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ybjvzpge.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163lkhfnpmt.html

================================================================================
来源：http://www.xuanzx.com/163xgdnmbuq.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ujlmbqbu.html

================================================================================
来源：http://www.xuanzx.com/163sxrbszyi.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163fbbosnqo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163tvevicoc.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163hfxbmkdn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dzbcymhm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ebdssgmb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mmhudekh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ilrwybaf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163qlaqwvzm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jrwzmboe.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163drojavfb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ldszpqeu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163sjojedim.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lgksprgw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kdikmkfd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163obqmhmnh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ubyvsiig.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163lprfyenj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163wnjgulbj.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163duhsyrxt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gqakkflb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wmmjputt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mwmnrecv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jqlrpjuf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163bcddojsg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ynujtgfm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ueezsgdf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163eajctwzj.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163hrgvynrs.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163xpfryhrt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rvxryvqd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163tsyqhskv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lniwabgi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pguukavo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ygxwhmgs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163glxwblxg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ieipsdkv.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163pljmuwkk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163auywswyp.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163sdjmyxhg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163neutzvmj.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163kbbtqjxo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fxitiqrm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163lurgclks.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163rderjqip.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163cftzbaps.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163uwcoitct.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vlsjmwio.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163taarbvzl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ohpywtbl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wnlqaphg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nfugzejg.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hwjphrhz.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163jqwqueit.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163laldztem.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163trvtzxow.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163doxglnkz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163saboezji.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jhyiioyc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dkqgouoh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qhspdoco.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163dsfwuojy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163slmegavf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xmjrsxkk.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163htwflvcn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163uxeprzov.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163zvbwdaqv.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163iextjpsq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kpulaguk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cjdbhobx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163anayicdr.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163cxmilrlk.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163crmahdiq.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ssqiogyc.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kimxntop.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163veagycer.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nqhkzxpw.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ddkkexhe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fnzmrqai.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163rzuoswdu.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wlcmmdgd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163dgcxpetv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163jfgcqapy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zjsoqrwh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163goymylwm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hilsuwzs.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163tlwqunbb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gttsdqpt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ohrcvpxo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fxdyfgkt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lojdtbej.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163vhqzwrzd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dbacxsam.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163krczqhfx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kxgnircy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ibkovvut.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163xxfhwfzt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ehtacbed.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ofkhkyfi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163goobbzpu.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dsnpugyy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163eafjvnvf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163snwrrcyw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163gnrsjeph.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xjrocsif.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vfunanvc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163dmphbyne.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wnnadsed.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163sqnpdags.html

================================================================================
来源：http://www.aibaodan.cn/163jbfxdimi.html

G. 面向对象
来源：http://www.aibaodan.cn/163xcxyabnu.html

================================================================================
来源：http://www.sxryk.cn/163hlubgisi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163axxsadov.html


<!-- 参考信息 -->