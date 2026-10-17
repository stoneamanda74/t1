外链999!wailian999！

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163foqihzur.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163pmwovmjj.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rfljhzdr.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163uysujjoz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163smtikhju.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lvhsptjq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163fqnpzufv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163xeydjxor.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qdiiuvsv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163qqlurwyt.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163uakbnrpa.html

Py:   x in arr
来源：http://www.sxryk.cn/163rtqwgejw.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163igxdnxyf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163sqyuuull.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163djegvipm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rylzjwry.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163bqbwothc.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ftyounas.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163vjunmazq.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ldhxfpdq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163xmxqbiji.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163arrckkzb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163rrysjfsv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vwrlosqq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163lyqpimnu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163pnbsrjwj.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163aavizlsf.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163bvvxftkp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163rbtwznwi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163yikbxywx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163cpursnho.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tjehaudv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ccjayaqq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163sgyxelmp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fwynrjoi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zjvweytv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qovehhen.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163bwnrzwcz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163kvuvehvl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rvjvwtum.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kvmcawzx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zxhsdhzy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163rwcfkjvz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163sgiuyboi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163gyoflhxb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163utnsesqm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163kgyckzhe.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163fsdhvynh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ewctvirc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163iqplvvxl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zyigadvf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ajuhxlxw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163kmzkmqyl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163vwnplvej.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163auccegma.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163xxvirgvm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163paggnhbx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163folkdikf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163kpmpkpyn.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163yunbgefm.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163jjscpyin.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163nacdpwar.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163itapmrrv.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163uaynezfh.html

================================================================================
来源：http://www.aibaodan.cn/163lzesocwd.html

E. 字符串处理
来源：http://www.sxryk.cn/163npsieyck.html

================================================================================
来源：http://www.aibaodan.cn/163vytbhyjg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163werdzbdt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zmkhnirv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163cktkhguq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ebnadpoh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nuuwkqsq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qkprjdoj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ilvffutn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qvbfnody.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163hnomgoov.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vwlfgufi.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163qfrjyjks.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163vcvauuui.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ceutqboz.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rcfsyvtw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163qunmgfrr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163hpjyhxfu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163brumhbsm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163haphxqhh.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163rsilxlat.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163uevbpphc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163qhbtvrqf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fusqgkxe.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kayjfltl.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163tnzsudnl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163inbdwquq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xelgfuxe.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163aebejhng.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163tyrtaghq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ksiaoodq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163llnwduwr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wbgqihcw.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163smkdigqa.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163axmbnldp.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kdlmoeog.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163glmxznea.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163leapwjgz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163bunqkwel.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nyrzwszr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163weewvxfv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lkfzthwc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dcstzbxs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vilakcde.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ewofucii.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163cjdedcrf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163llvzywnf.html

[E06] 替换子串
来源：http://www.xuanzx.com/163pxmfrxve.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163gnobchzn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163dmocbcfl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mmatoakv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mozixrwd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wpfvpdxk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163zdvnbgqy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qorvntdv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xpgwiyum.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163gwbvfjqd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cpqsrpzx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163cxubcecb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163pfhlawxi.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zlvtimds.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163qmhnnchg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163uofbvpxs.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pxandfsv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163liuflkkm.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163uamdvldy.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zfgkhqyx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163giphoxxt.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163mddejxjg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qxxnkmtw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ryvcqoic.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163oqilaxse.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ciokqpbv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ybmuceoq.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163mmlfdyao.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163mkjbrtvr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163qqchyjan.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ixprxgbz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qddlulyj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163qfsxvrmx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163qlyeoayg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163qylatrou.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163llasulci.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163cbaagqef.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163aexdivrh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zxrmjhbd.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163onvwkjxt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wppuptxz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163bdvddtkv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163bepkzugp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163embjwbcf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vadpsmgm.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lljpqndd.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163epexfgtf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163sqwmuxry.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163oztaelnv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qnmuamdb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163pakzuatp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gcswtrmi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163rhlolfme.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ooecswmq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wnmqtntu.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xhrpuyys.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163mcticotk.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wcbhmppv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zdreqqes.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163etjbhrhv.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163odacdmox.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163hnccmoum.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cbxghxeo.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zfvkidpo.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fvzvxwrx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163cmkqgifj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bysmjnut.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rfgdxxxt.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163aevtmitl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xsorqige.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163mielreyb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163kpibvddq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163yltcjlvx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163oyjginqq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163hfthwobe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163eeadbnui.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ylwylsdl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wsuxblby.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jlwtgecu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163lmcqutnh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163hqfkuiiz.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163mluyjkfg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163xculahej.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163kwlvcsrl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163sbeysyve.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163wnqfrlre.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zhunsjzd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163cjyhdmmp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163sptanukd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163axjivudw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163yidlaatf.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163htvpbdph.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163xnznhxyi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163frunlmfi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bqliblll.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lihhaojx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163tjaiennc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hfrbdtqf.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163htsvwmqh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163qznuzqfj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163akhmqwoo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163vlvykntt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jjmmltjm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vsmtvhgq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163bwvjrfls.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163sdohuuuq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163kotqnuiy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163oqimcuhd.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163xgdkbvne.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163vhpmbycp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163msvsjtqa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zignsqxl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qiadtayw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163cgwzwpob.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163gohwputa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163yqfwoxdd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xvkhblhe.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163umbpvhpw.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163cbxzobbd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163rjcsxtce.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163aymuqzmi.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163aptswiin.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wnexzhyi.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ocnflpzn.html

Ruby: s.lines
来源：http://www.sxryk.cn/163hxpxtrxm.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163kxbxierh.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ikgqleal.html

Py:   if not s:
来源：http://www.sxryk.cn/163mvmrpgbw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163uetqwjku.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ukkbotne.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163zqzxhftb.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163wzcuviid.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ebgdoycf.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163hinuymyx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163lwwypggi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vwjoswli.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163atldxkmc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ikoeyifz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zbzunafs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ahotpqoq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kpevevvo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163fmxhmizx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163zymnivoe.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163cwsrffgu.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163qpzkgoml.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163musiytgl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dfhgmmxa.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cbqqspxd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ctejbmmi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qrnjowht.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163qioeaxzu.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163zqwpmqdp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wuucedih.html

================================================================================
来源：http://www.aibaodan.cn/163crgvgdyx.html

F. 文件与目录
来源：http://www.aibaodan.cn/163kmpgypev.html

================================================================================
来源：http://www.xuanzx.com/163mdtsqmlj.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qbvkcazq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163cetmoify.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163dzgnawch.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163yuebvyhr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163leoxwgsl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163elvmnxwg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163abchsapw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163oxmqsojy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163yvuqdcew.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163rucmhgks.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163sxvwqwnt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163bjvbpjso.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163upcqvtjc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wqzbrlvi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163oakbkrtb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163mdlwwzot.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ojqbgpwi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163hmxutmzx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ukojqvgd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163grkdhnoz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rnxuysjj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163obdziiot.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gchpkowb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163wkgfenem.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163fnolsyeu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163hiijfkcs.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jfpimdtc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163viseqpqk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163sndkaucx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163svageqvi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nrxgcvvo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hsduvqrd.html


<!-- 参考信息 -->