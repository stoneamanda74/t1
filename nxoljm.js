外链999!wailian999！

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163trqrqrzm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rkryqmlj.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vfltplqp.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163errbvbgv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qbvzuxnc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nmfygzee.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ybrqpeiy.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163lplpqovs.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163xigikfvd.html

Py:   len(s)
来源：http://www.xuanzx.com/163cpdyvipz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163gepxwcol.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ljptmcft.html

TS:   s.length
来源：http://www.sxryk.cn/163fjseexwl.html

Java: s.length()
来源：http://www.aibaodan.cn/163akketvgn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163dlpatkzt.html

Ruby: s.length
来源：http://www.sxryk.cn/163nbkiifca.html

C#:   s.Length
来源：http://www.xuanzx.com/163jwfvluiz.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163hxyrilcr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163xngbunao.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163kpcvzvtq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hvqtplwt.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pksgjehx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163oiofnwxx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163rivovjue.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163dtqlmjkk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163kghypeqo.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163zxctuhlm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163vjdytrus.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ymgpoehn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vcuhbjju.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163opcwroqc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163vbgnbzmo.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ksrqyjqn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163bphjnxyk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163cgohuwio.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ywdiwvle.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163rmbhshgm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163uhlifrla.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163cwkqwqeg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163irpdqbgn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163nbjgyivm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163fofsmgic.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163xxkexeyx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163zeojisll.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163mtjdgskm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163lvfjwoen.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163biubrelf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163iotpawhk.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163btzifnmt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163anxfevjv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163xuumoezz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163tngpmjjh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ulkqbbxu.html

================================================================================
来源：http://www.xuanzx.com/163rayokiek.html

B. 流程控制
来源：http://www.sxryk.cn/163swwwwzel.html

================================================================================
来源：http://www.xuanzx.com/163ecxvxwiu.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163nnlkpwsz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163urnrmded.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kgkxjbyp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163okwhyfeq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gqerdwix.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ngcoqors.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163kjjcbjwn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163yaeymkfz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163damoacpf.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163drwvviob.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163zqohmctd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ibblwxvj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cinhaxtz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pizmryjc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lgposnzb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163mrmuaxcj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163lqqfdbec.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163prjnxmwa.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163wyzxgemy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163wgfxelwl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163qpkbqxlg.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lpsmlsvk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nrydxczs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163xyrlwoat.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jegjxmoj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163wmxfoayl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163uxmlusig.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163jpjwvbau.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163npmohjan.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163rdelbsjt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163puupjpep.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qyjehvcs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163mxjygmrj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nkecgxao.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163luwtrlcs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163zuaboxcg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163tuigjhvk.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163oihuaoyp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163dgyvkhip.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163vkjgswvi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uewsefvi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163zjqyyhqd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163eembxsss.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163dwtivhgg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163zozchrvq.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163jvkafiop.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163mcqfwijy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163kzkhavtg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vkaxdoqd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wymbhevi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163vqeojalx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163nfdkgmsb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163kcachxsu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163gyqwrzkw.html

[B07] while 循环
来源：http://www.aibaodan.cn/163fjdsymsl.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fslohyrw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163rlogdwfz.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xjsbujlg.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pifsepwb.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pafwkujb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kmjzborf.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163nedazpmo.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ycbapqok.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xkmwadyv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163coolozfm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163godlxxbl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xmizuclo.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ouxlcwyj.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wdsyfrpl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163dluqpmac.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163jaouikyi.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163evauzlkh.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163cjophjvk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jxopztad.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163dvcyzkzl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wvgefoze.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wvnqrydi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fywwfjes.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xgxgvuqm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163falkqfam.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jipmfwzs.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163tewujdqv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163qvkutcuo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cgixljkm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163zduijpaa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ibypetlt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163lvecztfj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163sfzminzs.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163omnsbujj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ubwejmoo.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163lkolmgvt.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bocibgwh.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163rhahpnzb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fwxxtper.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163atwolhmr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163skipeuyz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mvaknkpk.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163yylnlxai.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163utafwezv.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163mepcwklk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bsvnrdya.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163mnjddugt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cfxuftwv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hqeahsqq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nlydmtel.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163kwrnlhvb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163aifsbnom.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163djlufgwr.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163zompadwu.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163oxfgeupi.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163hcbaiiko.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ouqmqkda.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163czlurpvb.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163guhavrqx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cgcdfnuh.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163dpzmyexk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163jkqusnlw.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163twxjdddk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tqvaciue.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163shbbwczi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kscudhwd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kbehnqcr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cxncrgtq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qiqmtafp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qvbxtauj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163volwhxcf.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163tryjfmtb.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163lbgitvtq.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vschvjpq.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163vgpbaoyj.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163bttqmsvy.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163dobwqwtt.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ejevqcpm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163bovafebt.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163eoitveeb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163kgklamgf.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nbaemnwl.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163puaucpet.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163xwwzczaa.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qmrjpfkm.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ecguxcxn.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163filyslle.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163nqlmuljb.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163myxsbwyo.html

================================================================================
来源：http://www.xuanzx.com/163keuyscph.html

C. 函数与作用域
来源：http://www.sxryk.cn/163yrcodubm.html

================================================================================
来源：http://www.sxryk.cn/163quhfhldx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163anlykmpz.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wythqjeh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tlssuhzh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dhhxrftf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ehwjjwfg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dkdauhwv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163updhxqpb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gooocvwb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zgivhjbm.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ecvlgkww.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163takzbnzo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xjxklwww.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163fvkrrduf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163pfquwiaa.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163znxmhpaf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163pabbbgow.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xwweymnh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163cvdyikaq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ksjxucyj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163curbwrud.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rspzxhxd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163awgguynd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163midnwwbi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163istrogdq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ksvotsyl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163oqizjraa.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163yqotxgpo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dfjhhqdj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ivvptmub.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nndreupx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163wxuuhati.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163utekcxnn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163knyjqdlv.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163huxdtick.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lvuixkqv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bmejqcfo.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163oudfspxl.html

Py:   return a, b
来源：http://www.sxryk.cn/163bliaxsok.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rqufwngh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ywqtpudz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163zvdsawgp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163kyroxcmw.html

Go:   return a, b
来源：http://www.sxryk.cn/163yclqiwuy.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bkqdcdcz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rgnxxshy.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163grqskbhw.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ykfqyivf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163sbructee.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163borhmxtu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xrudoezi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163imrwujzh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163antlrbbs.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163cfkzzmxs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163fqhrnqay.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163wfkywwcf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rdgdvhmp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163uusljmra.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163umcvkkhf.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163zjujtnzw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163iqlebesl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163geltewvh.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ehiszqjw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ezrihpue.html

[C08] 闭包
来源：http://www.xuanzx.com/163uleqpnat.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163odzsyzrq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163pktmrvgj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fningllh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oxkjeoqe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163icvmziua.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qohmlbnc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ocsmlhnr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kdmkadjk.html

[C09] 递归
来源：http://www.aibaodan.cn/163przjrfmo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163htpeeykd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163foigiruz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163iqekiqxh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hkydgmli.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163nzecpcby.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jtedoyyx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163gpmtfnlr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nqqbtloz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163qbzqgfgg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163qryrucfy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163wskvgptc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163tgnaiwkd.html

TS:   同 JS
来源：http://www.xuanzx.com/163ibulansd.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163fntemgvq.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163qrvpnmpk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163rnsgyctg.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vricacut.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163jczomkbp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yytesute.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jalnmabt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163nncflfer.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163voigrtoq.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163sjaloyvd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163gqmkpeqn.html


<!-- 参考信息 -->