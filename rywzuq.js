外链999!wailian999！

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yckdupun.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nvxbpmbk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lnwdarwq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163dmzohnku.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163zazbvlsx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163hlsmsmge.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163xzesggop.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163pzmxevxs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163edllieoo.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163mgyucmxk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163cjwgydwc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163adbhlwqr.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163wwprmotd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ugazifbl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163nlxtiiar.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163rtmuxvsh.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163qoglsxrx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163ckchxgcm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163khhkuqxa.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ocauxwke.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163uagctjuj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163eadpyerm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163yghuxawe.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163pdotldpb.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163pnhfvrrf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163orrelzym.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163lmvptcjn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163jmmlxaee.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163vrikqini.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163puqooayy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163dtfrqtvf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163fjbjiidi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163pnkydqxn.html

================================================================================
来源：http://www.aibaodan.cn/163dppolduf.html

B. 流程控制
来源：http://www.sxryk.cn/163qczodfbr.html

================================================================================
来源：http://www.aibaodan.cn/163ycfnkdzf.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163lwvuukpp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163uzlkbxre.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163sxaayaej.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oaatpeiy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xcsamtmj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rneaekso.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163zvwmqqxo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163fbcyghml.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mdjfhtoy.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163vwxhsvum.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ayznaigx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163owgdpcjk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163yawbfjtj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zjomssvb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ywogtvss.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163wgdgpyem.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163vpcpjcvm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fefixoie.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163nuptotmb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163wyqbfhso.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yoflqyyf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163eygnejxw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163wvmoznje.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163hmteqees.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qdwcevus.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163lzqhmofz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163juvbzlcn.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ycffzimr.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163wrsvjdew.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mkrmvhmp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163risooqyn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hgmeruor.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163zgviyxvx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163bzezozoo.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163dqucjldu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163kysmvudm.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163jvgnmakl.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163zwlgkdqm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163hkzfcnml.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163btjjtehd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fvtweubs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163qusmnfur.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ctzomhqm.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163hvlvylnm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163sssmscry.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ohoumfeu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163cgeifwym.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163arnscdto.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163stcgnqap.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pnuynovc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163tgeftius.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163yvvfawcl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163kqqujgyz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ezviqcxr.html

[B07] while 循环
来源：http://www.sxryk.cn/163ragovquq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163dmuplqzd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xwljenei.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163umcovgdt.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aymaqhcb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163njegnoby.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163aujoynlc.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163reqmtfiy.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rcsrvodb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163zevjhvhv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163mzukrjaw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ucgiqitf.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bazhcysa.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jhizbkqg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yiqiovus.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163xshfesvg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163erellqgx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wyufvqnx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ygdvkynt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163rofqijwc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163tgamakxz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163guorgcck.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jwzskaqx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163exkdcigb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xjtsuuvw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163qfespgzg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ebanecsq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163kfprgwmz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ietdlldn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163becrmxom.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xxnzdljj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ewozwjor.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163vqvgrznj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163tevptiuf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163iebptvdc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163voxqdnzk.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163trvovgdu.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163jlbgtrwd.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vrnavlsm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xglsuzob.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cibnbbtj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163nwcftrme.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163dlrbshoh.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163uzfpsyke.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163xfftozvb.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163dpbrsyys.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bmchvopo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163bwulbhqz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fkaourqd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xunpqqik.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163isstlaap.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gwemadqc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163tdibxnqv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163lbnlzunn.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ttxhzbts.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163rkshlnqn.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163pucryxsr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fscjjxug.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163doceqndd.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163urvqqvvg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163eapzhrez.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163psytpdxd.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163mutrhgub.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163hrsehpoi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163kqgcgpgs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163fmoyaquo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rzlyfiwk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ahrecsvw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163xvkfqeim.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ttpfzscb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163cfsjlhdi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163hbirtgrb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163lgnlgcwz.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ftzvktod.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163vtqzzcli.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163kmmltsww.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163laneytob.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ovwdchhx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163azidxznf.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163klkpgzwt.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163gvxmbkvq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nelhvabr.html

Py:   if not data: return
来源：http://www.sxryk.cn/163scbjwmrn.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163eaeqvhix.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ttmahpoq.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163bdmpovid.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163hobdthsj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163dequwnyn.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163qwetvhlq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kpbywnyt.html

================================================================================
来源：http://www.xuanzx.com/163sjyqlgmq.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163yqgybxte.html

================================================================================
来源：http://www.aibaodan.cn/163huqmlzxn.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163trrvyopt.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163eyvmqbmf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wjgkkkag.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163tlxrgseh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mlsqsmum.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mhfdflyc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163xvjspaje.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163mywyxhwd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sqmeigxa.html

[C02] 默认参数
来源：http://www.sxryk.cn/163tpyuglvt.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ehabbpje.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vuyhortj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rtfnoimo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dfmrarww.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gwwshejd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163afybvdga.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163egmvzpva.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163jepvmhzw.html

[C03] 可变参数
来源：http://www.sxryk.cn/163clreylxa.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163yptqyczk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ssioaqbm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ptecbinc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163appcsywf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163puwomgeu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xxqvbfmm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ikkxmhka.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163uklfezlo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163nfvkiayj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163jkrsyjdu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163otfmjgjg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163gnssmlyd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163isgiolsq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lenvvxsx.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163mtqwfrln.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fpdxcklt.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fofdbpyi.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163dmkolosp.html

Py:   return a, b
来源：http://www.sxryk.cn/163lqtzjciu.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ortfiszb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ixvugejz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163kxmprfqa.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163oaargjdr.html

Go:   return a, b
来源：http://www.xuanzx.com/163uxeeasds.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ckrpkikg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ndvyqjbg.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163mtbadsqy.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ncwwqytv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163nwxsvrdq.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163okiuchqf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163daygxxti.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163hngkpiso.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163pggqkplx.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163vafudtvw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163tngjvile.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163wkwfwpdp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163waftnqut.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163urbafhyc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163erhxthly.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163tyqtxhlc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163uprudorp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xxfoqvbp.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163fwquyjye.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pjrdrleo.html

[C08] 闭包
来源：http://www.sxryk.cn/163fjuhyuwy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vujwwffd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163rzwxguxl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wxrmvtii.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pcddpema.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163cbfxeyxz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163gjxjdvpm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163eackayzn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163otuvxohg.html

[C09] 递归
来源：http://www.sxryk.cn/163locsuock.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ncomqgaa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rzsimlmc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yxaplahg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qbjunkwk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ferbfvsa.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dbtduzwt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163fzxmkjqa.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163hbqeizwd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163phmzdjgi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163beyxltar.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163spvisrzu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163tdysxbjv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vqwchnxc.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163caxcxkbh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ukmckimd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163yvxypsqo.html

C#:   块级作用域
来源：http://www.xuanzx.com/163hxizutzb.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ggnwebtm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163icdeckzu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fkqvjtov.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163athqakbx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163sjvrbwep.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163unoujwrh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163wnbspbkp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vagwjbgo.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163wuhjfmfe.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163dmmfmzxk.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163zynodtlv.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qqoasmzz.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163tqtrukiu.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163htdraynh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163lceagwwf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gpxukdob.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163vdlkheog.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163wjevcwav.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163jhwzmior.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163omjlabof.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yxqwwqhv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ymizmqsz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nunwovyc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wfznheza.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163zrpuaang.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163udzkznjl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163zmufotcf.html


<!-- 参考信息 -->