外链999!wailian999！

C#:   s.Length
来源：http://www.sxryk.cn/163ylzwmzto.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163jiiesuci.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163phmxmtyv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163djeruill.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163sapliion.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163tdctqzsz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bhyldgtp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163fdryrjjs.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163jdduyelq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163nvdcuvuk.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163hswtalna.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163bigpxkao.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ujvxkdip.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163euylrmll.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163fhmhfmlw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163gffmtimf.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163dsnuzrro.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163tqctqtaw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163nsbrbebd.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163dizapage.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163qtwguueb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163pbpxfqdb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163dnkdjnaf.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zwoetcpd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163frourtft.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163thrztfmc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163tszhosxk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rldrihtz.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163kcxnkjzz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163kznrojvl.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163jbbbtzlh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163sdpnculf.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ezfirhtz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163zlbhhaoh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163kfccarkl.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163zytfxxil.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163rrxfeurx.html

================================================================================
来源：http://www.xuanzx.com/163lvfiyian.html

B. 流程控制
来源：http://www.xuanzx.com/163tszjfmbg.html

================================================================================
来源：http://www.sxryk.cn/163xqntjdoi.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163daijzhny.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ansqjacd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163kpfvhduy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mxrgzbzx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xvdncgpj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wsejklqu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163lavtrnrh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ushgaxyk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mhiytqsh.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163kflrypns.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163dagspzgq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163njnksxnn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cxfekvav.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jilaymde.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fkijebhr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163giscuddd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163cegwxjcm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hbqilciv.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163qjjvvfjh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163czztmelr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163xietvmul.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163pgwammri.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mhyujlcp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163mjmnvxsf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jcvfecyp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163saaiunus.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163hwqhiudl.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163yxcnoggi.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163vuxfheuv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ovyzostb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fxuytzrg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zeuvlmhu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163lbtclvjv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163emjsqjly.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jxqvwcni.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hoznonpa.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163qppaanpm.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163vhcuniqs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163domnebih.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jkwckozg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ytxyjfyo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163eqwzrqvg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163zklxamid.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163xzjdcmbg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163whbgtnfw.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163apbuybfr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163cnvdsmcl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163hyhhfolc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dgxwqcwx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163nqjtpwnk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163faftallw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qfredbrz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163kfyzwygg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163yaqbrnmm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163tchlzunt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163wgoswqwc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163uzqhjgvh.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wpsunlwu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mmajsyet.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nkbscxti.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163vjivxjhu.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163fzmtdghj.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tbkbuyfk.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163npkqaeqg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ggactawd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163votymydt.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rnshlvcj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ikakejuv.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zaentnfh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163rvqvoivd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163mzwucpnt.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ictuxour.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163sjanvrgz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163qxamltdv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ajdexgai.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nfgltmbp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zlxwdzvd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163asrsdbgd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163moxzcuei.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lsedqsan.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zhbnjqdd.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163cgwgjvrh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bgkgzccd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163uwpnfesy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ccpsqioh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163mvqwrrsq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163esxwpqyu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163uuourpec.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163snumeywy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hdnarzjl.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163npfmjrry.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163aqeihocz.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163kdnespuf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163iirupkoc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dblrnmjd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ybakxdsg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163pinazigt.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163twhfyyxl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163qbmknoer.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gswekouu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vljwpwpa.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163eegsdnas.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zbdirals.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ejcavsxi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wypsuutc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163knvjudaq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ywzcktzz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ilcytfbi.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nezfzapa.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ipqshpfr.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163qxcdvkva.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mkxszqfn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163telftmik.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163pdxekgwm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163amkndzbr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163afuxhfke.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163apxbdciz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qifddcpt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163gtjlkbnp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hfukzbiu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ehvooubi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xsrzzbgs.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rzsopqdw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163strstahy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163daxnhhhx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wkmctbqn.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163cbzjeozg.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xwpzazck.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163nstyaqqu.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163keedzduc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163yoecebfk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163wxtahnbt.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163xkuyptvl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163khjjbmtv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163qrgrmwdm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163eajubigb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163sgxaitzw.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qqwhqktj.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163qjqrwzim.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ueujcowu.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163shcdqgay.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163emlgoqay.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163hsgwfwfp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163zvwyjdwi.html

================================================================================
来源：http://www.aibaodan.cn/163aitodihp.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zzkxocra.html

================================================================================
来源：http://www.sxryk.cn/163qrmqwfpe.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163asdezykd.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163cstskual.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163chtjezmf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163whnexqjv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zbrisqon.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bgcgmxrm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163tiobalau.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163dkwfjzal.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mfsjnvaf.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ijoctwfu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163zuqiyyeg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163kvaawdkq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rpodcnde.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163cporxkfk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163rkgyhski.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163mgxdmllm.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163apekqvbx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163qfjbgfzi.html

[C03] 可变参数
来源：http://www.xuanzx.com/163lejyyfhy.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163kyrypoho.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163nemgyjrf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ojjdxkmz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bgdibotp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qlsepnfx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163skgsesmn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163inhetuup.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163aqjbamgw.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163idpiwvja.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ufdrnnlj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163qzrlslvq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163rpckunus.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ujhbufjm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163evpaxsxf.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xnyynykz.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163snbeoitt.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163uqpbwexn.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163tosrutbn.html

Py:   return a, b
来源：http://www.xuanzx.com/163vvommatk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163cxetpcgh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163qpnhnkub.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163wbiytyvp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163dqedccti.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qqdcdaqk.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ynpkckpt.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xiesjzbx.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163oftwezwd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163vumcgpmg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163tpnxfohr.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pgyqdmhw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163qvvgocjp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163fcjtwrbt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wmuuxhhv.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163sqweqdge.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163zbooygvp.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163plzdrmnd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rxwbgxgp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163wwllsqak.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163frtmtobm.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163jkkpbdbw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tobpijrh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163cyzvtppq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ksmyospu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vbimsnpq.html

[C08] 闭包
来源：http://www.xuanzx.com/163eybewozs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163otbvrcie.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163txmarukm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xezhtwqr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163awshwvmq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qdxcaofb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wogfyyfk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ayjbleid.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gfimifcs.html

[C09] 递归
来源：http://www.aibaodan.cn/163swgftzyj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163jcbwrkla.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163nsaudfhz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jlkhchia.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rlphajrw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163spuvivar.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163xhgmnqvk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163zvjyauxm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163tgbutjtg.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163keibnpjh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163hekdsscz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163atpozeoa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163gazswjqm.html

TS:   同 JS
来源：http://www.xuanzx.com/163tohwtype.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163lwrrjbgt.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tvoqgryf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163unvvyreh.html

C#:   块级作用域
来源：http://www.xuanzx.com/163tsxuchim.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163irhxpwbv.html

Py:   from module import func
来源：http://www.xuanzx.com/163xnnegavx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163rcmkdeng.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ihvwtrsh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163zplfexbd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lvbmjyax.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163gsahprsv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ezhsqulw.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163rwwkbisb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163rppykcto.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hhdbfcwh.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zfjpqixs.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lyewzgvq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fkerjnkf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wmzrdoqm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163nlcbxkda.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163zlgidnos.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163sgxvfbky.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163jmczxdaf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bgoedrcf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xegoslhz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163odcjlnhe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163stvpnbwu.html


<!-- 参考信息 -->