外链999!wailian999！

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hvaicjyc.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nielmrqe.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qhbmndzw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163krvxqior.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nildmhpc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163fpebtafb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163yuagfxks.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163fbmzjeaf.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163cvigluhe.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163xvkkhcav.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wfpjongb.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163rjjoonrz.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nyvsaymu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mitvpetr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jtcnrlcx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wisenddd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163puwrgdhr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ywthvdfe.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163biwzdyue.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163vjkzfjir.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zjjztppc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163htjmmoma.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163txhgrqkw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163tczohfwi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163yrwkobmx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163aijsbsyk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163lupwjxlb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163kezmubwj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163iqbgcdue.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ammxvvpc.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163rqrescqc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163batjewkl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163kyvqyrde.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163dgbgvejw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163bdpprsmn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163qgjxkpyr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hdzhofml.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163luoyjlou.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ohccjkrg.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163whzajjac.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ffczqldn.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163akksgbgx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163pdwmtcjz.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163aynihlpo.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163mrmbxfaw.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163sbswsvww.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163mukjrycp.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163dknzattm.html

================================================================================
来源：http://www.xuanzx.com/163nayztgda.html

E. 字符串处理
来源：http://www.sxryk.cn/163yxuicheg.html

================================================================================
来源：http://www.xuanzx.com/163taqurhrl.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163syqpkjqm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dnquuizw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xskrrlyl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uxilpmzw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163occekauy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ievwpiad.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pzxorxxu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163rahmnaxn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163obwlbpgv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qtskuxko.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zqgfpxgn.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nasonkfu.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cvtmshqa.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163albefjkz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163nhuukxtx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163natrjhqi.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xqqwqfom.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163wmxyvezb.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163dicdyefr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ftkowjin.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163mbhuujqa.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163uysbcjln.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163eajvadtt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163gtwbkcps.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163oexuglqw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xapurqdo.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163twrtgjbx.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163axjpzzzv.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163kduoyjki.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xtvdpgte.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163pfzgjlmy.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163mtqwoqwi.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rlhsqwid.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163rnsopgcu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163bwyifowx.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ibhdpxqp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163rmvxbdbd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163jvbcjkwj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bxvdamgv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yngdiazj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ptupwhct.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tlhkczye.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163mmdztcmv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ibxaclnu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163isjruicv.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163syrlmgti.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tzztprmk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ofgpfxjc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mesgjjsa.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163akdshwci.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lcjbxgtz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163reaeycbc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163kfhjqrau.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163tnnfigby.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163qgdsbvtm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163dpvmffen.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vyhqnqxr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163orsjqoix.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mbslnpig.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jjxplnhm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163gnmgywbc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xaagsaye.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zjxmanqy.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163eopqnncj.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163onnxitzo.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163nxqbfbxj.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fkdqbtfl.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163vfbrllgc.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ejwexcsz.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vafutsul.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163rertoecf.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163phurqaya.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163pokfbnnj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163uylwfbvb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163chhmetpr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163skplmffy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163npyhcoey.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163altogmec.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163nlhkvndz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163gaenhtdr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163xmeepldb.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163thhibdyx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163itefkzuo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163yvcngcal.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bhzhhwke.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bhrcjbwe.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163drrxvjab.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ttskixyn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163sgxyakhr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163duhbqawg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163fkqpbftp.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163aqzadtvc.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163drenyrje.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gjewchsp.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rgazfqkn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163zdysjpwz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163gbhwxctu.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163igopdtcc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163yukwjtcw.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163teoxvwla.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zgnzwcvy.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163zvqkcqpy.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163silaixze.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tcxvymkp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163lykyauxl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163vptyyusn.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163caufhwgg.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fxhwpefp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ryqkqhyz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kfhdwxgx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163efjrbjys.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gwipqgnd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jgiocupg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163bdlzyadl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163psvsiehd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163udrhqlug.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163fblcvvmy.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163euepemuz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163decozuej.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163cmumykrg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163fmcioify.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163jgppuwkb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fipqqaga.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163tepypqcj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163rnulodna.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163bdlnrdcs.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163jqtkmwtv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ajmoomdd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nrcwutim.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ctsehgfz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163duthtwev.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bvwavorr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163olcbtteq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tvspwkrs.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163yagtxdta.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wudmhzox.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163trfavayy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163odlnjhbo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163oeakurua.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fbdzdlww.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zercswlf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pyqoernl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163eyqvupnz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bxinipiu.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163tjkvxaqq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163plneteyw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ovdazvnq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mhtausnx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xwyjigtj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163kidnsyhw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163goebxgus.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163iyifwxms.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163hwapwypx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163nuhplhiy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163tvqqpubk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163wtbfnmch.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jpfdephx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fqvegpqx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163arxkiscd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mfoffkoz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163caffwhzn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zxowtpjn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163zebslyat.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163uychnkgt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163csctbtrw.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fpcspwwv.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dnpteztg.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163nulvksft.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163imgjisva.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163xvrjwiow.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163nlchesby.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163kmgsdoav.html

Py:   if not s:
来源：http://www.sxryk.cn/163izkuzocm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163nrrdicha.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163cbmamenl.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163aahagfcu.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hzsmwsad.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163jvlsgeby.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ipjcmfjp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163xmcnlmkt.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163edhfypig.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163bydlicja.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mhgbzjdd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qvlfhdwz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cdtacnom.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jbxwbokp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163fqvvihao.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163kdjvfnfq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zfivkayt.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163yfyftriy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163peqiokfn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vbmwelzo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lzvvyhfs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xbuehupy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163onxuefxa.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163trhbmwcb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163hzuxeulm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163aedthvvg.html

================================================================================
来源：http://www.sxryk.cn/163tdrrgufv.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ylloowyu.html

================================================================================
来源：http://www.xuanzx.com/163nyidufmb.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gcgcpbci.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163zdvcknht.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163vwbrmejn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163lbobgujm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163tfbnfkqv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vuttcjot.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163bpscfkit.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163eujyogtt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ugljttdo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163aebvkcyg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rpnjgnqr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tctcpzif.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163exxemiqn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163usfwctpb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mkvafwkx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163xjbzvkdc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163irvsyloh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zxaktweq.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kihtjarl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ajjsmvee.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163aodirlzi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qwzqykip.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bpmnvepu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163wscgebaf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ryiovyis.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163thxsaxfo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yredygit.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163jnigumoh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vtvmmduj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163fobiweod.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163floemzij.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163tzejhatz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ovxrcyyu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163jtjmxexm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163nteiwaan.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tvakwxak.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163pmcxsblv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163wnzkmpgi.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zrzhrghn.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cvvfvtct.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cfjqmzcp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163onmaerjx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hbarrouy.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163baubgwwk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fiudawws.html

[F06] 删除文件
来源：http://www.sxryk.cn/163buzpfpth.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163umqtmenh.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jscvhjmz.html


<!-- 参考信息 -->