外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163iqwkndjg.html

E. 字符串处理
来源：http://www.xuanzx.com/163liiaxgnx.html

================================================================================
来源：http://www.aibaodan.cn/163jhqnopta.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163wdrgjnpg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163kbcwupjh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163zktewxvm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mwlaqamb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rlknubgd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163hgfizyrt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163thhjazya.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163vanyqgyx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163fjvrvmfe.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163rgnahymc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163cxldddfy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163oqgaomkw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ccgbkaig.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163atqtpbbf.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163jxtehkve.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163tnfpinju.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163matvovms.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163nnaosmub.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qoofnbre.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163bahumete.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163eiabtedu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163mqifekjb.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163pnstjmhu.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163qiplaxly.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qnnurolj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163jniddfui.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ubpnqtre.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dzfsjfxl.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jxbqvksw.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163vzliplzh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163dxztifnq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163hlooneqi.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hxkephvw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vxecmmbs.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163rqizihtl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xacfkwdd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163lopemrme.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163utmristn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163qgpjifts.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jdozfytm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ladhqjcl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rbqkaqco.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163uzusbrqa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xbtxiejb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vhaohmdd.html

[E06] 替换子串
来源：http://www.sxryk.cn/163uxbtfjwr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163memynnsn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163whokdrky.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qgcexgte.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ufxgetxp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gcfcddkt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ijycjfor.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163jmnqrrcv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163rpfyjvsg.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163dkgetuwe.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mdrcjyrr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163uuubysac.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163yglmcafv.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163vzyfeoeb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163dknsrimv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hkrniihj.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163pjosyvnu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163omfnygzo.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163hzcdkumc.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163liezcnjy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163mhtbdpdg.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mganjnhl.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163axxoapqk.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163zjudkjsa.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163mliciwxc.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qgvvkbyp.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ticsyfai.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163imslvjvw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zfrbnjad.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163aawxdfoq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ovkyjyva.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wmobzxwz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163jfpalqvs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163vwdzqkqc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nbphhfqm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163vcowwwjc.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163tvtqcqlw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ujqdsjxo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ncrihdzz.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163weflsuzq.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163snhpopve.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zjkrmwyl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163eithellb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fahbaxvd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mjkkkxnr.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163fxjycnqi.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163piytceim.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ehieqprd.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163txevogqx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hqfalfzw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163btvbalpy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gfhvrplc.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163tqveyjuq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163oemrnrjf.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163mrtlnmhf.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163mgaxdpfr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163tspzzngm.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ftolajfz.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zqvqnrwd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163trgnqubd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163mueaxqrt.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163xxtenyua.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163paxobbql.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ulenvdel.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163kivvhnfb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163cimiexpj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xekancsd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163poffnchu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163fxcdhbtf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vfcxjvhr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wbvupepf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163cazyedqe.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qpmvvrfw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163pyfgbmab.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vvuluojw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163hpavoupb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163dvscghps.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163oopodvlt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163gevnmakm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ocgogtfs.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163uesbqgin.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163dptbvstk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163uokafcux.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163usibxkmt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163hlomewyu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163tsemgyvp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163yunyighi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163geakjimj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163dqpmxuvv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ydcegdfa.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163thxunxty.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ckxurkqi.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ntekxczo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nkekgaon.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zdxdlixm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ptdloobu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163cmibgona.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163zjfzlzcx.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xggskpyd.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163omclpnqx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163hwpwtlmf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163exuwtziy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163btlfrbyg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jyxjarpb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163hotiqpht.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163kfysodqz.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163nknowodh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163attcchyu.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163iwtufxle.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163nkrclhos.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163jvropcpg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163myfurqvs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sshhpbbx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163jbnwykxu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163owwookco.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163yrjeomvy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163spwbkxis.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163iddpecqn.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163cjbyflet.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163tznjyqus.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vyokzmak.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ldistdym.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163maqxhhxz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163nkadbjui.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ykthkmsg.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163rvchbrkk.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163urofqocx.html

Py:   if not s:
来源：http://www.sxryk.cn/163kwoytsbo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ssixddam.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rlrynoer.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163eiyexzli.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mfadhjia.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ihmrybsx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163dmnlxyll.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ckxsxbtx.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163kdjxiqgt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163arxshymp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163dcxmxfys.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tkrqlsan.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ptkaqbuh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lhjtwbvi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163zjfarycn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163lpvwqlsd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163aesucytv.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wihhnksv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ezemfvwb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vkotbtba.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vfjpfpbn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pabbzdax.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sohttezt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bbnhhpfy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fkzkbbyg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163nivsykqf.html

================================================================================
来源：http://www.sxryk.cn/163yxokefom.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zgciwasw.html

================================================================================
来源：http://www.xuanzx.com/163ubyspgqo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ynrwszjr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ujvbxmlu.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163uddouezp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bbpjhbbu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kolctubn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zzjitqux.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163aavljdzc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163nnessmgf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xakbbvjo.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163bghcvvdy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163eiaikyfg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163oceahmca.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tlywlvvz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bdetusth.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jplcbowa.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163lmxujfep.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163bwxsidjl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163fkdyhefi.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163zrxbfeqs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163lqwjldkp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163vqwrfmjn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dykktsqw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ifcmjqzw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163zpjqjqmn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163jkhxylgi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163agwowyxe.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163nnxboqga.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163mygozzlj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163qtbuheit.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qnyizgyg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gulkcapv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ixsceaia.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163cgpbbchx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163psdoncrf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ofdmvlhj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163txswmqly.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163khjearog.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163hgenoyev.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163eadiwomw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fgekvyrc.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163funsnnkg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bukhdybk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ifnlivxz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xxokqjeu.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163zyoygtoe.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zbkkiowv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163asuksvum.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163bndxncga.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163thtohxta.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jpebeckt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zrrvnbfz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163mgnppedv.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163gbcgmqrl.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ezxsalje.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163hptwevrn.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163eddbqmwe.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163oghjjznf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tdqkrppc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163oiuchabs.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vatfkwny.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163isahfvwz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ascujfxl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163qzpvcdsx.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163pqhjnjps.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163wmmquawe.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163hdrtpgsc.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dpowizpb.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163spsrwtkc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163twoclchv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163fcwaufdb.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zblkulzv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163uywncgws.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163bvyeyqom.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kityszhh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ajokkpbw.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zidxxstd.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163exvlnggs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nqfgupvv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163mvhmyosw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163yviinaip.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163cqautluk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163qknlejip.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zrilrvjk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163keekqdga.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xyxbxfwj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163mhywsiiz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163iyqrgaum.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163jfxaazpk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xyzwqnny.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tytqcnzk.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ocdppofh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tvknrjua.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163wyfmfjna.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uurrbvfm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oculzjno.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ffsepcew.html


<!-- 参考信息 -->