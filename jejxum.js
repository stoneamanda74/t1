外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ivajfdqd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gqcvcplo.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gbjzuzmj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163yeghmlir.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ocbbckid.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163gsfsybim.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163erngqnyq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163itihrmzn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tnquprct.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zpcaqapc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nkyjvxzu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163kczayfax.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163nmofqxmy.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163rqtrhnfz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ssmuqqrb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163dczntewk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163hhfqmdgo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163gshdoezk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ouayhlkw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163vrjddbvc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163fyrqimtd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xbnphrew.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pnwpzqrq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163suwkwdrb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163clwppwdk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ffswefqy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163uicutrnf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163urjwmsza.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pjckklaf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163jacuavzl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163iaqylwll.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163eztzkdwe.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163tjjfnxmv.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163qtxevpsq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ptnmxjbr.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ukpfzpsq.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163nipkdfeu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163dobzgrpu.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163fwkhfgik.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163jcawqvkg.html

================================================================================
来源：http://www.sxryk.cn/163qehnfwvf.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zvygpmyq.html

================================================================================
来源：http://www.xuanzx.com/163ahtszhgh.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163lcprjlgp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163aisqeuhm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163aoltgoae.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tinpdqtg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gutmcqnk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163phldlfvr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163odoetxqj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163eooppnha.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163zmvinwap.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163lkndstaz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zcsgvzrw.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xxgkjwmp.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vwmswehx.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xhttdtym.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163bfgrxmnn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163kblvyaou.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163absfmpsx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163cxxrryrw.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zgfyvbbd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163fryrwyet.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ppzawbgb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163anunwfop.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ymwgzuxr.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163punfonfn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zaprkrqf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163juvrxgma.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qwccecce.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hdlezqvm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163meqhglyi.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163yrwcszoc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163saedvxbd.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ezahbnvq.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qaydjqoa.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163kkbefiog.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163gymwvdcz.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163hhrrodaf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163jbjfzjgi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163gdllnnol.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jtyzfurv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mkbfzklv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cxvvqgso.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fhuzeblv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ibanslbt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163tccqkimd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163gophuawf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163izvfdqor.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163exsltsos.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ogqbggop.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163btaqxoea.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kfxdfohp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ujqlkgbe.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163fzstugxd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ieyujqfb.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163mezhxkvv.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163hgmagsxs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163oudfphmm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163inygqhom.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163jzqppzft.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hzvtuqua.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163pfpzxivx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163taezwgev.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163uewyhvpv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163gebmyuru.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rmipewtz.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163phvulppe.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vcjiwatu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163llrxopka.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jjertzjh.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163eyxcuzth.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cxkgxgar.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163tujclxnj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163cgochova.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163hrazorma.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163yxugmhjw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163spyplbmy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163heusndyw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mdkqefdf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fnycyfei.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xfdglweq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163mfpvwdzj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ylnkvvpk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163pqqodgbl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163rtvmnzyr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163fuyqcfve.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wewtwyne.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tsxailgu.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163sieqnurj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hzkxlpbm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ogcipqqy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163xtaddofs.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ejvwwydc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163zkmqgtzi.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163fhehauix.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yalvzgts.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163amkqtmme.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163vzwqinlh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163arihvcoc.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163zetlgvat.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dlbhknkf.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163eymocjsx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163fzlgwebw.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163decifnto.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163shgulydh.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cwksxpir.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163szcjvqeo.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hurspwhs.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163orfkgrxf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163hrgzayxj.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ihwzyolf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163zzltkzva.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163knrmsgsr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fbyjjyly.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lkqxtxzs.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163nqefrenp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xviirhni.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163phfklakf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mysdgkcy.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hugnplxv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ouengede.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nlceoyws.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163oxakrjnb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163gosivfju.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163tmxbnwap.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jaiwcmba.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163xumlfvxo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qiqhoybd.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163jxaqqmfm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ogtdkksm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vchwacwx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jgyqntiz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163hgyjlfzo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163stysfztn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163wmpcaelr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ajagafgi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wsnrkknj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163rjqddkxe.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163chrlcpkv.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163primzxen.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vhphtauz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ekhzltkx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hdnpicut.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hpqmdjyh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cawytgqz.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163otqrxgsp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ohchkezc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163kfiqwzuh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163awloldjx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163adxciavd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163knkkmiaz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163dpujjyag.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tkpfvzqu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ucnxfymx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wlzvogvf.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163rnymzrzp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163avjudgjl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163khqsmxnu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dnyoscbs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163usrnzvcn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163pxoqfokp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163siiliekt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163wflazpap.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163jkiklcoj.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163vjwnvllw.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163dowpdrvp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163vjyyugiz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163fxcdgtlh.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163iyzcndnx.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163dhdqsoxk.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163tcrqobch.html

Ruby: s.lines
来源：http://www.sxryk.cn/163rjjprklb.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163frcyctyj.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163uqnycisq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163crzbrlpc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hwngmcou.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163fyyxnqfr.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163hqkaetqr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vendvqwh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nomtpyys.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163pjnzgmzb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163yhwwommv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vlgrvusa.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xlyfxcql.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163wghkrnif.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163netolxxi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ahzdofjv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jlwoolro.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pyeeqrgj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163fisirgpk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xkokglhx.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163noxkqfuk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163nkosybxz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fnvzsabf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kassogkr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163noaphslc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163hbnhegsh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163hsykibxi.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163wxenczbr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163nmygvhma.html

================================================================================
来源：http://www.aibaodan.cn/163hjvaspya.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lsrlgoqc.html

================================================================================
来源：http://www.xuanzx.com/163tlosdcof.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xnzqsdpr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fbxyozix.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163bzlblafd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ddiagmjf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zartmtzn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mhhdajwf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ysextfoz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163dmfpkztn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163suhmnebt.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163rffmrwaw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ooyjchoh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163fnpvkgje.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jrujojaf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vjwqhrmf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ohfqlmfq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ltnxftry.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163kzrfsdkd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163iujmbihv.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bfiawsyp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rkwdzlyf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163mvsldgmu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tdgyftww.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163povzsspo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163frjfzybu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163minitlcl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163lkpvlxlg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163amhnbtsy.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kvjkwuml.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163nvwavbyz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163fgindlpc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vmjyktbi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vopdgxra.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ssuvjkpv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zgzwqduy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163rtydgovf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163jigcyvne.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163hfxlmdut.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163yzrcjklf.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163sdbdmjhe.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163izoimeuy.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ghckthzf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bjlpoasq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ggvhyjjh.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163bzbzcpmr.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163lxfycnes.html

[F06] 删除文件
来源：http://www.sxryk.cn/163gesfzdxj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163njuckwca.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163kxexusrf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163boazhbro.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ufovjbqi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lwptqeyt.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hpmkijrl.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kphwddjl.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ognxakwa.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163yzvtycab.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dpppnfqs.html


<!-- 参考信息 -->