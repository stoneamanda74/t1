外链999!wailian999！

Ruby: arr.tally
来源：http://www.sxryk.cn/163degxiqps.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163njcodoyl.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163dxhrpzri.html

Py:   x in arr
来源：http://www.sxryk.cn/163yxnkvqro.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163mhwuwyol.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163xdlubcth.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ccyfyhjz.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163imqflhfz.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xjsiofap.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163tmzxjynx.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163dhccroio.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ztiuhoty.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163trgfdemq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163mvdorglw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163iglwjxza.html

TS:   [...arr];
来源：http://www.sxryk.cn/163oqudgdfl.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163qyhjknuz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163laocldzf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163hvzcckbd.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163pvpojjte.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ittsmbvy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163wbjaeaqr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kgvlcmba.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cihwfsag.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nziaejzj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163mgvwemjj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lydfapcb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163mzkukscg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ulzuplqu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163brlaabyy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163nkgqmtdi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163hxwpsjzr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163zgodagwa.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xcewnjxs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163cpmnklrt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163pypinypt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163zpkmmvwt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163oswojtyn.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lbbovwuw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163liyujbgu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163hkepqttn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hlrkunnl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163cyoqlhym.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qtwugwra.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163jzxcmmwd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ssyogpvi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163yjndwucz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163wnqxcagc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163yrstqtxx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163rckmilgj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163egadxucp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163zcvsxxka.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163yrfiniuj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163otcsgnxj.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163cshmolpa.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wrqzpoyf.html

================================================================================
来源：http://www.sxryk.cn/163qihmffcg.html

E. 字符串处理
来源：http://www.xuanzx.com/163tlsmornp.html

================================================================================
来源：http://www.aibaodan.cn/163mhyugoqo.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163cebpqzmt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163tcniajms.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163onzxvrhl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163adcmrefz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pmeuvqum.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163bjvaqnnj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163mbmqrpch.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vmgfchpk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163oneyeafw.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ejzulkds.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vagpemgp.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163yiyfivkk.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pzytogzm.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jmpwgurs.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vgezlhsc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163iadlsebp.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163oxywfron.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mkanilbi.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ufhihwtv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163uymoajcj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163narxeqwe.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163dbecxpoz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163enewyauo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163yltjwcjv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kxxymino.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wtkzhthc.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163smllhcju.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wtxmlcex.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163wrutklhh.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163bdygxglm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ksegxioc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lxjowyme.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rzuvusro.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dqxnrpwx.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163tewhdyce.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163tjxoapim.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wqbxqewb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163yzmnleev.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ggholfhi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hyyxiasa.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163srwktztl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wtjqhbfw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163knjxucen.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163rxhrtkgs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wgwwilxo.html

[E06] 替换子串
来源：http://www.xuanzx.com/163qjjaproy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163pbasufqc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163uhjfwivq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163axjmougb.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wpnnmqiy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pyuhtbzo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fwjjbxjp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ovagriag.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163fgtrdpxy.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163anyttpxi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ciioubbu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163kiiizzaj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vjjcuvew.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wvwwcvxm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163akjvhiwp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163asctlfap.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hseovtjs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163cuafpvaw.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163mlnwwffk.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163tabhubvk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163uemgnsdv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163sqoklxie.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163xyhtytom.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ooahqawu.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163inoqkpmn.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ufedimlg.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ufnvxoxv.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163saimigag.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163qysewmtd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163aferdbcu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ddgxjwdq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vrgvhpqa.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fitarpbc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163heddcigz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163phrclhth.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163heknakgv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163owehyqna.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wzajfsvb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163sqjkalwe.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hswzdxng.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ulagudmc.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163dfdezbxt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tekjdsyx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163fihypmvk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163sasuqxek.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163vrmpkbum.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163keibfpzx.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163engawmfq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xbcubguu.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fnoxyiup.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rdxdgxqm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163vnustizx.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163hgaxiusv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hzepjutk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rfmvelav.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163natjqeyp.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163znfsnlov.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qilomgrk.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oabtqfzc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163swwjufkr.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nwkiactl.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mtgcimdv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qdvnsyku.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163cleytcxu.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163asxjvzqn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163uwiabqhi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jyktbtxl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mjlckpie.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tsjzxxty.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163fzqjophi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ahqodcmd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163xajygfit.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163dveylgiw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163tmhokphc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163jbbzxvjv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163swgujjfm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163pzvucisb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163nkyrxzrs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163gvilznjx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ynpyxpgo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ehdesxnu.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ovemgrse.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163epujjohz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163tomecutb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163hqobdaex.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163kavdcstc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163clgmjcfa.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ecnapvks.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163cqwxucla.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163iprsfysp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ckpszrnr.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163dvufkwac.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ionwymwm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dbwngmfr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163sydugqzl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163jcazxiya.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163erdqdkls.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163fsgleosw.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163rwplyfao.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163pzergrcr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163tzqpwani.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bsbgrqnw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163aganakfh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163hbrfcqoz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ulnikhup.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163difndsnj.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163bdywojaw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163syysgruk.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163jxyhoagg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163dbrgvlyb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tjzmlbcs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vbocoand.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163dhlbnmop.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163jzrsotqs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ezqspnml.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163euuczabx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163oxbejsny.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163tansilbi.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qlubtyic.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163lvnefewt.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lglihtez.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qkovsstv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163vomaxebs.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163yqxovkqb.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163heovefdg.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163irkuzggo.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163zcszfvhc.html

Py:   if not s:
来源：http://www.xuanzx.com/163wzttzoqj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vstvjzgq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163jbdbtkor.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163wczscaek.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163reqwhgar.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163vcqfreck.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163zztawzgt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163nbotftoy.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163dlbjokma.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163vbxtdpbj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fyjucsuc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jhnqmiet.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rzcqxuoq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aevytspc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163emmeunur.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163bnuqpjgj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163iavuairu.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zudqtshm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163mrhxjtjc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yzsiukav.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ptsscmmm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zxuojguc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rzpexrgj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163egevcspn.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jwxmjwsj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rcojkoyz.html

================================================================================
来源：http://www.xuanzx.com/163zosgmjck.html

F. 文件与目录
来源：http://www.xuanzx.com/163mzvwvncy.html

================================================================================
来源：http://www.xuanzx.com/163ahretpqd.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163butdhqwo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163wtvakuek.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163bhavmlwg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163gspihife.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hqbslrvh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tnnkxank.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163azimysrv.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163jhhpdgdn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163whayhzby.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163bdudwnko.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ahoqmvdi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163enkfdlzj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kpbccxsm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rfgsqxlg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163spninlvf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fuyyghyx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163eugfonjw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163eaxnzfsg.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163vjhyrxfj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163jgzggmjl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163asgiaftn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fockduup.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163cgcqmyte.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163eyhownho.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xdpdvxja.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ppfjyfey.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163uexkbafr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hmuyeics.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zlshvpju.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bufgspki.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gdsogfcb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xatnisgw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ymjrscyz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163sckmbmid.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ffrjkruj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rkugohrc.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163wptetaqg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163dnyofxyu.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ddqvuqdu.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163voqehvma.html


<!-- 参考信息 -->