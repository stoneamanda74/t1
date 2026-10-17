外链999!wailian999！

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ldqplpcw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163chhqauea.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xhplcyzm.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xoweqhgb.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163vwesqhrg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163souztpvz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xeqeiewp.html

Py:   x in arr
来源：http://www.xuanzx.com/163ielahham.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163lhrchqhz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mibgochs.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163qwochsjr.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ydgkdbvy.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hxtlxagb.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ldcssash.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163lmmepqss.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163frhzezcq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163fednlyum.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tptgseax.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lxrlzhzi.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hxjvuxbk.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dayhzcnt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163dzbnfspi.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163zqeoqfaw.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163zogorwjg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163icmculhp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163nrptguva.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fniafrph.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163taruzymm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xutvnwel.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163benkogje.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163omvsozsk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163mvbrmogw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ggjisctk.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163mcbpfshs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yuaukpdg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163inqgrdjp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ylhdgozi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wyaeocwi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163lccmrhqo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163zykqcdfs.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163izpuilvm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163jzpxaftp.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163czdpnacb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163doknzizg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163mtmwmsbs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163fuozxjuj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ywjvkaxs.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qofdoltj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163juzyynft.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xqdjqgws.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163mjiaptxc.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ljnuiner.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163azswzele.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163esgrquqk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163wzdvgcpp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163zpqukppx.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163gxthcfry.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ngmzxabc.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163sapcjvvh.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163tzsertom.html

================================================================================
来源：http://www.aibaodan.cn/163dvjvpddp.html

E. 字符串处理
来源：http://www.sxryk.cn/163pczjxokm.html

================================================================================
来源：http://www.sxryk.cn/163rytcibfj.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163uqhgcvpl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vaolvwns.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fvtyasva.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cloxhmny.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lbcuzucp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163kgsxhxwp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163gqvxsytj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163uaqwdecs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163enwsrmjp.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jpnupwji.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163axhlueur.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lqbigvim.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fydolsig.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dguggsyq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163dyxismfz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163boxjijeu.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163czcchdou.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163jrqowqvk.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qshcaklw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163pszlvova.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163azchqwda.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qnijrhkm.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163cicjehrv.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rylqbsbw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163yqfifxix.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nouelluz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tyxdhufb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163yxzwbysg.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mdeefabq.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163qrefnogg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xguhaoyt.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163orxcgdty.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163bzttgxgl.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ctpumobp.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163npnodsrb.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163orkxddls.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163nifjliwp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fxkemhou.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163aaepdtsy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163uxkrmixo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163xlxhekmj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hckfsdkp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163tsdwmjlb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163dekfogew.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163lbormrkw.html

[E06] 替换子串
来源：http://www.xuanzx.com/163uxfgrmjf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ewgfqlnz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163smquaaxd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163myhullsl.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ubggrtya.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vwawmkev.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jatoxred.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163xdoctwgu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nuvobere.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163qhnauxip.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163cnvljhub.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163wbmvziyc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163fcyigjgn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163knxqeolr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163vgqivvnk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ktihkolg.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163lycjatuj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163mrncqenk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163otchsauw.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163sapauwsl.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163soiiswkb.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mvzewgzl.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163lhrcwilj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163jkenrctn.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ajcakbld.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163rzgpgmgn.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vjkbxqgl.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bctxorxu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163nujxixwk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mdglacul.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zowsetqw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ozkbgzia.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fxcakuvz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ltcrcsmu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fuwcozjq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wldvzxgb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vwcihxqa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ihrblmfl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qwjkvkpb.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ecgyvgzf.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vicpebhq.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163rvjbitst.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jqiiixtq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163azlzhnxt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163icikkooy.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163qujtlnvq.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163gwmvdsov.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163geofcnud.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163urrpzqtg.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163puyyofva.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163dwqpzenb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163cuemtmuq.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163splgikua.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163amepwtka.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163basvqybd.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163buxrpoht.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163mkbyoels.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fsehnnhr.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fuqiebiw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pfuraxsc.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163sjesdmhl.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mhrdaupl.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163bbfevpud.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163nbnjlrer.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qbrwdkbu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163fhrrskeo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163avrgvqcx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ncclfybz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163emcmfukw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163jppuehrg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163xpoyaaka.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163hrghimuc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163xltlnnau.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xttvqfux.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163pjsdvshe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163queyoicd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163yfwvemzs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163acnsybgs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wzaesufr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163arjdovin.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163mikffmvq.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163lnhnjynb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lntmnzmj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163downtezb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163fpebwbmq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163xuykjuwk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163nkrcnfvw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163nunsjiqy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163yzijyhwz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ctsooqie.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163rngddvbs.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ucdsrcdh.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163gobznrxf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kbsjvuha.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qsybuapg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163rlpnbeci.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163xzdveahg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163zvbfgwge.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hhmwalxc.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163pmpgvcky.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163tsubryse.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163hddfakrl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163adpuzppi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163exwkzzby.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163bmkfqhkt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xfpggxkz.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hqugtapd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163tflrfdid.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163avbvtojd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163vdodhczo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163murepbkp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vmjohjcp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ndqperca.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163wesemxfw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ueefoxon.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zqlgyohp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163fhztbjaw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163rrajudlm.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163iopdrisn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163gfjeakil.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163afvcdlbc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vzwtgtty.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163dkidrsim.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163daiwzkdb.html

Ruby: s.lines
来源：http://www.xuanzx.com/163oxucjpah.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vieqbacf.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163smvnrdlk.html

Py:   if not s:
来源：http://www.aibaodan.cn/163aypduexu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nvgkghyw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ddsggpgm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163voeaicwx.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163bmisklzb.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163etylnemd.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163lavznqcg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163cxfvatxq.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cgmawlyc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163iiavufob.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163svjufiom.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hztcpwkg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163afrhyrqt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fsvckyzu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163yhklswqc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163qrvjnlki.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163drsrklzz.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163mtuctnsq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163oirnfwfl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163avtdahpr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163znhyhnyd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jrjehfnm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rmtbfoeu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jselqcds.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nrlzskyt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163tcceuspm.html

================================================================================
来源：http://www.xuanzx.com/163alznhrrn.html

F. 文件与目录
来源：http://www.sxryk.cn/163nycksxtg.html

================================================================================
来源：http://www.xuanzx.com/163nteqmplu.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mwusfeun.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ndtntmva.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163yvfwxceu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163lohiwdfd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ufumnbki.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qajiyltl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163clctgtie.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163mjrtfncz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jgxudrug.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ojmpyvag.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163pajlduyg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163xojfnwtn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163amonnhdh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wtvvqzyw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yuuzbdvh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163cyqlivmk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bhicoaep.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163aheutahw.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163abzauedx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163tvytfrvc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163tyxapthj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cthhbkum.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163orudzpnf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ibjdlqhb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hsfictfm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xtruxznr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pvhdffkb.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163tjsycjyx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bffdhvpy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163uddoimvx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ggnmdskj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ctejqaoi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163iaedfvvt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lthcjvpw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vbodwvie.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ygkpxczu.html


<!-- 参考信息 -->