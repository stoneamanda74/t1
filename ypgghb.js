外链999!wailian999！

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163whxczwjj.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cinutuct.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ryyhrusd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163jgkekwcw.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163vzdnuuzg.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163uyablity.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163gryusdaq.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163nxrdqhzo.html

================================================================================
来源：http://www.xuanzx.com/163lcownoax.html

E. 字符串处理
来源：http://www.xuanzx.com/163rkcszcof.html

================================================================================
来源：http://www.aibaodan.cn/163skcldsdw.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163wwaddacw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ihbtocho.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163epxobvug.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tzxzilst.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ggseihqa.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163puulagah.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vlchcntl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nrhladgb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qzmsdquu.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163vzpwbqjl.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xgnhkmnj.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163irgozzix.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kpnxwjna.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fddufxzo.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ysqcvzyb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163kxmvhjfd.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163fvyjrbmi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163wvlvpgdd.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xhvmlfjq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163uiqpbwji.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ficeoswv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wgkfefqy.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ghxtqmzy.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wadkyjts.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163mysuwebz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163fcrxyrhn.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163xbloirie.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ctujjgeh.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163apvfggdo.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163kgnjqciw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163gjfcqwta.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163nlfsbtzu.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163wrfeomjv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163uqlsttsg.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jlvyhqbt.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ppetvzrm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163bbxhraif.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fqgpirds.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163iopqdwvc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zalpfagc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zcrauimw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nkwmvwsn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163gfshfssa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163iisncizc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163grtytmed.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wobabnaj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163epoaiihl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163heakdhbi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qjxrhgfs.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pyvsvqoc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tqyvehpc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163viudtwrn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163iqxdkodt.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ffvhvovr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163bvdgpkdr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vkknaeqg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163wuszhhvt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163tuhoipuy.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xkhfibrf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163joaymfzs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163rbjepezi.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jgoxcpsm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163urqliqeb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163kojlossw.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163lvthslbl.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163lgrkwtuy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163txghbiiu.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kjstcigy.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163parwlkvc.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163zzgmkiwe.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163zjggbhzg.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163yvmlhbsp.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163upkimvhc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163pcxukifw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163azlkuscd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163aijupekl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vxbvaxdh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163meikqgyy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163swxgtynv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163qzwwvyql.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163cowrqyia.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163kkxpjrth.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163silzhdin.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163gjxozwvj.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pbblrxkk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lszplbly.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163diutbwbw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163pyuktepz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wumfjqxq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163oxoamymg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lkelskfe.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hwnibgwo.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xrwcnlpm.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jzjmyasy.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jdkyaoxx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kazwzpcg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163voxttxfo.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163uzjwjqvw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tgvftbmu.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163hivocudz.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163aeuvktex.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163cgwroxsa.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163trxaxhxo.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wfxsbwxo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163geuqtmbb.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163tjpbcxrl.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163nhregjye.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163fepusxsb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163tfltuhyg.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163wdryjqtk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163askswsld.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vsoviltw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wtwauzon.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163efabqaca.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163eymixzbu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163djxeuscm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163sppnhkqj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vtvxkcgc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163bbyjcjuv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163zxqfisoe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hkuhwran.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163nhpnjwep.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163indcbgeu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zqrssjxx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163mclnqbbr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qllmyggi.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163bfcfknnz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hgvdpxxo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163mckixnax.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rsjjdmrw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163hiinlhtb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vpltnctu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163mqwdmlpq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163uwrsktql.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xsetmwgs.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163qxaxkrqs.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163wxewxebi.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ubvbfbyj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163pvqkpfig.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vytnbhqk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163dsyjlham.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163hhfqcswg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163opbkjkdv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163wvljodcy.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163dzexmfwt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163crimdhep.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163dxtcjivf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qceyolvp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163znswpgok.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163cdqpvktl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ssmsxvdj.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163aszitegf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163cpaasbls.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163tufbeemr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163qbjhsvsj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nbhqbmbl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163twzekdlq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nshnwsem.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gwwhvcwj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163btgpeopn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163bczhdxna.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ceupvlno.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jbwsjpvw.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ryhdnrbv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hthbaigg.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zuxfsend.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163msyjcexq.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163vhnefvjw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163auvmuabs.html

Ruby: s.lines
来源：http://www.xuanzx.com/163wweddvmd.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mgnlphcy.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163gedoayif.html

Py:   if not s:
来源：http://www.aibaodan.cn/163hdcylmkn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163emzjqlbr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ysmxhduj.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163yakjufrs.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163jlulxrzw.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hqdkdnjv.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163sffgplza.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163atniyvlp.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163crydwzhr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163anhemnme.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163tldzhjbc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bhncbtks.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vtvtxeak.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163albkqiew.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163adigntsk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163vsxylcmh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vgrxcufk.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hvspgidb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ctrjwjbe.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nbhksprv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wwtauedw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ewadlcjp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ogrzhiwu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163mzrqbxoy.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163zdjrizwj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163omdhewey.html

================================================================================
来源：http://www.aibaodan.cn/163jorgmlwt.html

F. 文件与目录
来源：http://www.xuanzx.com/163fuqzyced.html

================================================================================
来源：http://www.xuanzx.com/163wrfdihjo.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163qvybshpg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163bfudqquy.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163fpxohxeh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163botgexyv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ghzlevgj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lhtesrrh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163nygvionf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163yzcdvsen.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zpqzuqok.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163slfxvzgn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163tqhxbpuo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163zgdtgivf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lixjbbnc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mfnmmdoo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gvwpmrca.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mqsayrda.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xzgtifiz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163vvrycusu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163lfkehexh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ztzubyqf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163hxgikejp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ippvuxyr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163iabcrdjt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vaxlrmch.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sxkqhldu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ueewxoax.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163fpyfjain.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163qhykybbt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163pfyikvou.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163lhzpckft.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zoeelnvw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ujetzvxm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ajyumkzk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163dvbufaqj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ouqnusnc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ekafmfdx.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dujhcvuw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163nrxlaohk.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ansxdafz.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xbwkavsi.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dnxrhrrj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lzickpmi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163luejjynt.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dzlmdqhu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163bcbcmfrj.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163jjrcqjfq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163aaeruppp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163kxywcgno.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lxlhkrbw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xlxmbthh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zpotzrfo.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163lnawqpcr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ndnnzfds.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163uverbfyp.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163glyspqxc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163gxforrev.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163cvokdoqh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gxsknnkp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jehlfyha.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163luzhluoj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163wixktfjn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163edmgbrdr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163knbwelil.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ztoudwjk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163rbzoljbr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ayzdkihj.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mvnxvyib.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163goglpjhb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mbrshsml.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163siuosvrq.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163icvbdoua.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vjxcqdlt.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163jfckowqd.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ujrngjid.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163hysvergc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163eoowwzrd.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tvhhrqbb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163twqktoup.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ktcqldxa.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ydpynxrz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163yovkokmf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gvpaibvu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163chhuteeh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ggzwnqwq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gglgclan.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163dchqhyug.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163nsrjrqvf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163cbnnejzz.html


<!-- 参考信息 -->