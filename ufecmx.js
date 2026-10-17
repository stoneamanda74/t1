外链999!wailian999！

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163vbucffle.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163pxjdqjdv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ibjunhfm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tiqckntd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zhqkcxyd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163yjjlyhuy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hnhddzgn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xxntgxfs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163qsbhatjy.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163fehblgzp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163rhajjcdw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qjtvgexc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163buhhhyuz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163iyjprmho.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163hbulatig.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163gkzwisew.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163bvujutcb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163buopzaci.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163rmswawlj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163iepjynmo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cnkgfypj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ydmjlbsd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163aozhgrcd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163neypbkpg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xdbscgff.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163cuxpqsdb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163mgrvzkhg.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163fghbjbvs.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163einkdsma.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163bxgxanbs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kjyqmnzq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gsylhjsx.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163rqtnscuq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163evwsnqwb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163fasqbtpo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163hhormuoi.html

================================================================================
来源：http://www.xuanzx.com/163azzxbyvk.html

E. 字符串处理
来源：http://www.sxryk.cn/163qwkxdsyu.html

================================================================================
来源：http://www.sxryk.cn/163mjhpnqwg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fsfnllbs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163puukzusx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163lxpkjjif.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qwtytewu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163aolexyzc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163vnkcandy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163aphcwswd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163oerwoapg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163mpgvolbr.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ljhiddhy.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163moibbjbh.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pngzeglf.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163whupvyif.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163uhxnhsds.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ecfpnird.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hycabqcv.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163eqahcxlo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163tpugjpsw.html

[E03] 截取子串
来源：http://www.sxryk.cn/163eexyfnis.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163sxtldlvj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163dcedyjpj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zirjhcjh.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163wmfitrwv.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ayigidxu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163rswausrt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163nrcuritx.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163layprezd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163oncfxvjl.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163cukjamtn.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163obluowlo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mfhiatcf.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163jsehmokb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ggrhtnzx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163iccjstar.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ncznalgd.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xosvnblr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163htfrsoja.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163aizjfulo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163hzlpifks.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163oviufofw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163yudnaphs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yerlrkuz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ziwrbkkk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163otlrlnvd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ihtkelkv.html

[E06] 替换子串
来源：http://www.sxryk.cn/163meyuetlq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qjxfozis.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163hrcaaaks.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163acipylgf.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163movkmwte.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ffdhmwen.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163aiqfnfeg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163shmotias.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163aiqetalt.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163aptuwxla.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163knjcvcas.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ajjxoxit.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163igscrrtm.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163krgkznda.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163iogcjbvv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mypcnpdq.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ypojkrgb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163sbcaqdqk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163kbcmcsnz.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163uyldivxa.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163brwglaon.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mndydktj.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163rgjnrsof.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qhkhvpif.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163tuczpmlt.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xnybygst.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163sgmwppmm.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jnwctkmx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163srtbapyf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163abcsygrk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pewkrmoh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163uzbpgczk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163mgidffuf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163dpjawkqd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163uzlrlawh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163qmhatocj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163eppfwjbd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jyustnpf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163aqemmmme.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ybgseltu.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xofgkufr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163viiluwyg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xmnhnwmb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163sbznrdbe.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163skgfeadr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ihytqfrc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kycoudgg.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163llnvdstp.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163thaeaajm.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163olzrbojs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163avalgxrn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wqahtidb.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163frkoulwj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rxfzzmjf.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wmzymsut.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qnclfbqz.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qjdxlcih.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jvrgovnj.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163injetckv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163buaxkxqt.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163nrkedbjs.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163tuupcwhp.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163swgevonx.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163mjjqxttc.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fdcbwuyc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pnpeahte.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163blegriyk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jvhdkxcf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163rstdauvc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163nxxymkgd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ftnnobhb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ozwrzelg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163tvqnzokb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163dbjgzfzd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163agctmsaa.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jhcgqhur.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163cmqcfkrw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163zqucitpm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163giopzsob.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163vtbgrplj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163peavufni.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163siydjngi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163mkxhkvyz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163rrbvwixb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ngdznkvc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163dahhswxn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163lgqzrtst.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gpcxbgwi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163iezcycer.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163bhbhuqzx.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lyhunzyd.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163whbblyzr.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ombfsusz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163oqscnphw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jexsdpkb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163wyejqqjy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pmsngcjn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163sttlrckq.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163wbclykgt.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163hvekuwmt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163fknuzrjy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xgbulpbe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163okdjhgmj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dbcsaakq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163xangqmgj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163mrpzmsiq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163yuqydlcf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163jucafsyn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rkvsdvab.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163daexxnkf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163zjqhgpjr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tdsznbzz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xdpmkbzl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163xhyleaud.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163pzgtcbyg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163uvbkgwas.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163nyzhayyw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163nbfxyvge.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163isxoknwv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163nixpmkvs.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bkgtnvmf.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kymbekko.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163fykslevw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163amlwhosj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nxoahfqe.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163kqxenvpj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163eymsdcsw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163suuembuu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qqytggvx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hlhyqclg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163lqwrhubr.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xwdlkwdl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163drzbetco.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163mmcoqesf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xozabxpz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mrdmetqp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hfphckny.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163hoauqehw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ttmrdizz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163adgwjadh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jhuwpdtw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163wtgmyibl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163xaavcfve.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ohzgtcok.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163azjmqxux.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163eueobnbh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wzhdzeii.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wtumahzi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qmoveytc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163oabzjkax.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163oaxdpsba.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163kkcfarbd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163homvyqmk.html

================================================================================
来源：http://www.aibaodan.cn/163hbakczuh.html

F. 文件与目录
来源：http://www.aibaodan.cn/163illagich.html

================================================================================
来源：http://www.aibaodan.cn/163rgyogned.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163xekwfwop.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ikpeghcf.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ddgybvgn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163iajxxvlh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bmvrgqst.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163boqftqhq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163npwsmjgp.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163qixgxbtl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163pwlnrksy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jwbadlhb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163gkeskkhv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163gadnwrwh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kiptmehe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163iuyfmoin.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zbnsslvr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163uvfakndz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163akmdldpb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163qjqaqccp.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ciukxduf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163uhihrwoe.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163rrhyxvjt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mhnrbudp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kmoyjtki.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163pghccwna.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163dgozimca.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163lnjdylpq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qimybrby.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163kmvccxjv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163oqvzgars.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163jqeszxax.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wldcwzxv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hgutihdd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163efkkkuqj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163naysahza.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163kyfhidhf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ygodmgpk.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163medpwrvz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163revniyzo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163govflzgv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yzfhokag.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ofrjeicy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ktljrray.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163czndodjp.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163vgviymox.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163aeprfutn.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163cmsbtmsh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qcuxlztc.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163udkgnzxd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163typlaksb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bqcmkzba.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bvocrmmz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bheoksqe.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163zaswpahr.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163vnevidmu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163birbfrdq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163waoegghy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163mlmtfgvy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tqamxmne.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eakasqjr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163wdskvtam.html


<!-- 参考信息 -->