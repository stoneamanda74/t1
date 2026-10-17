外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gnwyilpl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zwpryjdn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163nxqizjht.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vhjvtbri.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163zbefggvy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163omywdtit.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mhzznypu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gqjdvahj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163qiepwymh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163mqbbapet.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163oeyhsiet.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163odqfbqmv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163yljfxmjh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163rsizmjlz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163pfukmskw.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163zwbqgcxt.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163eolmhadm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163attbjbwt.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ieidphcf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163heimokio.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163mpqomrix.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163lezisswi.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163hvlmzhwd.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163imuonurb.html

================================================================================
来源：http://www.aibaodan.cn/163qrzzgcnp.html

E. 字符串处理
来源：http://www.sxryk.cn/163aoklhlai.html

================================================================================
来源：http://www.xuanzx.com/163wzcbpoiv.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163phlwcgfl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163eadfybvl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163oksxswmo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qxfortkn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zeozczcz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jhqnikyt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163dlwfydpt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ejullgan.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163znnpfkna.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163yyhwctmc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jolqwdcu.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163bdhwkukt.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pxgbapdp.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cinfkroj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163fdljixoj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163yhazafkf.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163unoznwmj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163kmlszjra.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vtfmxsst.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ptcmijia.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ejpclfox.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ohlbapxh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163nmzuvxbv.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ptipdehp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163mqacszdq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163weklizxh.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163hmwlczrm.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pdfuyqyf.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lrmkmkcm.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163bunlmeop.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163cxeizmgw.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163rhfzlpsp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163esqcnwmg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gapupykp.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163vucqsxfb.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pbgbdzct.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163tagqqeof.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vcuvdmtr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163kzjxvnsi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xrtolmpg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zrxozhps.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kaitemfj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vqqhsalm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163gobrpbqi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163xjmuqrzz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163iffpakuf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163omrtczvb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163fjgvzcks.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wcsjstuk.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jwjejxtk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163agjoujbl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jxkxinze.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163uozaosgd.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163upldxjdj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163rfxnsiyf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163iyortday.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163iymcohya.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163axlgzhmr.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163pjlifiov.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163yzqvnbld.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163emxmrdtz.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163tdxtqlse.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163wladchma.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163pofacoll.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163noscivrq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163smyrsurn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ocemaxeo.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gyvvneou.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vtzziqzo.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wqyvozxa.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jjrpiiqm.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163zszzbdil.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ypgzalkm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163hdvqkzzp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163lnkyatzu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163aafeucrv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lifaugun.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fxrkjfmc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163sussddsh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163enjoihit.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163omhgrgnd.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163svjyamdr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kosyehpk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163llkztrhk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hijfyamb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163olcfnddy.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ehjmaubi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163aqwirfed.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ksximfqp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dobwymgm.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vekyngti.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163khnbemvv.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163nuaqhkwn.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163imdahwkh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163picbdehk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163gkppgkof.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163hlbmxfso.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163rcpsftyu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zoljmmoa.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163smbcxwmr.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xizzkgnq.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vjhhjplq.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xjcvhfvp.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yoikgtnj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163paevinlf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163dwazretw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163akwnfbtv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cfqsdzuj.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dhivzuny.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163dtuhqbsq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zatnlsiu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163amigjjge.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qfwlwbdz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163xilufgxf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163styofmmo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wgcxdydt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163zmiaieil.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163lsiobafb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163vyttwwji.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hjruyjzo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163duexrhqw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163cikkbxqf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ysdrvefz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163qivvwfuu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163oobymtun.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qiwnvmfy.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mcoahtug.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163rfppqkew.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jqpiurwj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163kezlmajd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ldngcpfo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163dsenjclx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tgoraueh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rjgomlhw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163keuqirvx.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163exoaeuii.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rttiwnlm.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163vpdtengh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163njgnmnzv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wxovzhto.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jqdkrnyw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ckkqrzte.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163dtsnbtyi.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ovqytiip.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163hpkexcfn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163wrlkbxop.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163vnepajzg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yudzprwd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pbqkbjzm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ifsyycgr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163qomdxqfi.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163thqfimxc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ujvgrgig.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163uarrexol.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163byxmkqjl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163bjxtqyto.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tyeqtetl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gpvgwpxg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163cdziqwcy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163racuoufz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vbnrnmxf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ktemgdoj.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jcxnhwax.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bkyzdzkn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163yqaqlfhr.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tfyquxnw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rzbnxily.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163oktsgjxg.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yqfjizrb.html

Ruby: s.lines
来源：http://www.xuanzx.com/163jcczxvni.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hflhewyi.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qtdmiuij.html

Py:   if not s:
来源：http://www.xuanzx.com/163poqszbup.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163irxtetbt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fmfjhhyy.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163uuspmohz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ykkkcnoi.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163meuhkfcn.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tvpwpkbx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163nqxyhmjh.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163nkxodlee.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ahctuyis.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zbavwwlv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lzxwehtz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hcnsgzwk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uljvpyoj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163rdjhrupr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qsbubtzs.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163dehuffur.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163fttvsbhh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vxubxwol.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163yqhiarhc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dqyfbthe.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gogyrhhw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163bnlgdbqv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163yprxchir.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163tfzkxuic.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163pfpfatfq.html

================================================================================
来源：http://www.sxryk.cn/163rwoayiex.html

F. 文件与目录
来源：http://www.aibaodan.cn/163yhkwkycx.html

================================================================================
来源：http://www.aibaodan.cn/163yrkoxwcq.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mzreyjhk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163iutzuedd.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163igqfmdvt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163psjgitrg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ccutughb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hlifrvkk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163qtqxkzev.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163vlydleau.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163dnilrlhi.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163srxnacxu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163sxrazfmz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163hlybjzuu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nuylkdjg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rbflsava.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mtdyadfi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163wgqtojle.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163obgzlwyg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qiaiiuzb.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163qtgivrja.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vsfqakjd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163efogatfq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163njgsiaas.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163genezuip.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qwemjwqc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163lsreoqvo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163wquylhxo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163xjriphsk.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163arhrjqlz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163gwqznprj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163zognmbqn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ypdhzawr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jgumqfem.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163gakogiqh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163phasyppk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163yzwjfxtd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qduptemd.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ontmozig.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163aszaknyi.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vkidowvv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jftccaoe.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ffecagzu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nkykyzvb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163rvedfpcs.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163kkayyjeh.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163mggtluji.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163dlfshicn.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dqlwisjt.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163tulnhcwq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163khxnhgyc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mheixobv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xwrwqsvv.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ekscnuwk.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163auvanadn.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vviasdgu.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163rwamfsdm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cnufutve.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163zqmpnyqs.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dnzztjii.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163obodfbbx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163htswdwww.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fnkdglaj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ibubrgqq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163lptspizv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qssolgys.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163neflknkv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163flmstrvr.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163eakcuram.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qahjzfzx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163scwgyyhb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163dkwzfazl.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163yjltvupj.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163hyyddzxx.html


<!-- 参考信息 -->