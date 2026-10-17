外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163pwenquci.html

E. 字符串处理
来源：http://www.xuanzx.com/163axlnyzon.html

================================================================================
来源：http://www.sxryk.cn/163zjzwikas.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jicjdvis.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vqdrhyll.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163cqzigpxz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bdzfxqgo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163cpdjboag.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163tftmsabn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pkuoifrf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qkgsofmp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163pqoyyfxs.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163bnexkwmc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dekzrivf.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xhsjuasl.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vzixpjuw.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gvsigzzn.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ruajwqua.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ffmicmpw.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163lewfdsre.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163hjxghgpj.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163euehhmbj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ckhtxyms.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163wmplgltn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163kscerbzv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ykipkczx.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163bsubuyaq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163jjkvrbng.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163slhofkdi.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163lyzvctvt.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163wazktipb.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163bfbdqhkz.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163cvggdbbk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163apoqbvgr.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163bimvlcwx.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163aqbgujrj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163uwnngxnv.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163hkuqwpxk.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163kfvarhbb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163msletmxa.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163nnuqvnoc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163kdgezvbo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yqokyyec.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163fmbagfkp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tcgickwq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163pbaruujw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xouuduua.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163cfiwsrvd.html

[E06] 替换子串
来源：http://www.xuanzx.com/163njlbyvoh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163rvddpccd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163qazfvatm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163omuvremj.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mvmckcwz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iiorlbhp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163venqjqxp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163hupxarso.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163nmcfodwv.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163tekfaaez.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163cnjynndx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163tzancygx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163pylxmbaq.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163rizmqsva.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163udkquccr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163snjswurv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163lldqivnd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ioqafrfo.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dtoewyra.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163xscoyrkb.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163thtaiwjb.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163nhxmqmie.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163youucqoi.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163dnxvalhj.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163fugfjckl.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163nawaftfd.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ynljkzrm.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163kvcriygk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163wihyvepa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163azxhrbqq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pvdkobdv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163sxudpyrb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163eorwkrrs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163oppjmcnw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163mezlkwzl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wrqwmnbr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ulruclye.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163xcpxeccq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163heydlkge.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dnbjnowe.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tgflvfmi.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163svoleymy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163aambtqij.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163heaxyzjg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163hdtmyugg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163iuzhfgpi.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163quvefoxy.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163dfwtslwr.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163sqmhekqz.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ezkjdidi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hksttqxt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ozdrmyln.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jvinrezj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ngntsgyx.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163epbzmclh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163alycmwkn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hzjfybnt.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163nylizsrw.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hxagyesr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163dfwifnkg.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xinqhdzf.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ehgoifkt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163dfqdbctc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jdqzcnre.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163vtagwjnu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163dobtbyob.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nxkzdnpk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163saqihsrd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ujfxsouv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xektfqtu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163kefaurew.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163dmmtmxfy.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163cjiwtzyl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hndmdnir.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163dqnfpqnz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zlynwrkg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ullslphg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163lgucnabu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163rwrqvuud.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163bgemzndk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163oyonlaaq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163bcwqzirm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163brqowply.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163tanttmnz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163hstrxais.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163sqsdigwy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163gmoelzta.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163nhbhockd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163aeomtenz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ajafsttt.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163vmynwmsf.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163xyjjxask.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163eaqdeyox.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qrzwqdii.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vwmssmkj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xeropfxm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163afosdtut.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163rfogkgig.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hcajiffp.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xzjqbaay.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163kxasdxsi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163cgakmjfu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ydhnzqqg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163itfklvbi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163gwudsaqh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163cmdegjch.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163lncneaqc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163glucmgkj.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qcizotqr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163oyffdszm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163akntwplg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nflpzeft.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xjdcagec.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gpzvsuhv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163gsdfiyyk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163kvhvxilh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163pprszeoj.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163dhtbeqqb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163wniwaxmx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163qvlkxcpm.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kfoowele.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hcefhuuk.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163rmicumwt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163wjcfaujg.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163fwkwubtg.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163rscmryok.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163zqeuccjg.html

Py:   if not s:
来源：http://www.sxryk.cn/163tpontwtp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163pkvmehbg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163uyqcsase.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ichlvlwf.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163iacoukdt.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ikmyfbxm.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163kiftfjjw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163sfbzeafv.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ovixjxei.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163yshxxyxp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163mbyqmgwj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nvmkmdqk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hxbhnomq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xvyegloq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ardtsflu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wbazqxlv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163fbziofhg.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163pludmlvi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163apauyjyw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qvyfsqzt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kvcbfoxl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163dalarqlz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163bpzhdvfo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163arkfyabg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jwfgfgwp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lkbnebnp.html

================================================================================
来源：http://www.sxryk.cn/163qoyrpmns.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xjpynmbe.html

================================================================================
来源：http://www.sxryk.cn/163uxepvtiv.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163rccpztrf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zdnqdmmf.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163iuvbyuds.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zlwhpttd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163bwthqhfm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hdixezwn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zwuszbxf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163feufecmm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ynutejfr.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163dkfowuie.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163leqcidck.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163evywgvrh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xvieatiu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mwspveps.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163eoigrmqu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163zztdprfd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163gthixuhr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163btnamanf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163emvhsicx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xzoygvvz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163rncjvetu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hxctxuuo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163svkdqrix.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jwusbwyy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163torzpyyu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ieyujcov.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163iasvqohp.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163omiclwsd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163iczmeaex.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163lfekcbvi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qxerwhyw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163tomdngaa.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bpicfbhu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zduzhvue.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163knlribtf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ucxeqybi.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ygclgxue.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163akixhgrl.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163nvyroufi.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sicohino.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yrhmnrpq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kxzfjxco.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163gjyuftin.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gikcshsb.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163hfjwcvbt.html

[F06] 删除文件
来源：http://www.sxryk.cn/163izsdntxa.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163pthyfgbt.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163bliwskkr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qvtaxvzm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163scbdeiwi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163caaiogby.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163fegbtbgn.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163qckqpbak.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163iweejtww.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163gydvpgfa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163olpljhng.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163odhjzrnt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tghjbjgx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163xhqfgkbb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163nuhamvuf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lhvbhydr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163tanulsdd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163gvqoegzv.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163zieerkck.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163isdhlwyf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ynxruido.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hbmmbyyt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hnbpxino.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163feabsjpv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163tzkqbnbv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qlshvvnq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163iqtxpxxy.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gerunpee.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163tzzchbvu.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163clbhnoat.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dfnrwxbq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ndoyaoou.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kmggwpkb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163iqmakgkj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163obrhkowi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163lwpfxjqz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163xwtllxyz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wpzsesfr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163wubrgnir.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ytdxgtwm.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163bvwumvsy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ulrdksog.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163hhiwosiz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163spmtsleq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163nwrzjhmi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vrkjrgpw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hradlrnq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nauucxdr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163relsxjsj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163clfwosvy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lngoejio.html


<!-- 参考信息 -->