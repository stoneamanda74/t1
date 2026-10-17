外链999!wailian999！

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xiaigfxg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hhpkknpx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163cchpbplt.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rqfxzyqs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yqretvhx.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163amlhykps.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163kjbkabic.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163jtwdrwox.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tydzgavg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lcoelrjn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wgyvhylc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163azowcvhb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163gwrwcrwa.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xlibpevk.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163xksmzojn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163vsnvhcth.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ijertplo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ivefztur.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163thdazuqm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163xhoovdyt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163jwrrtgxo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163lkvskise.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163akszmrvf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ljyfhqvj.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163phbqcurx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163awteprjv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163uzpkbzst.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ynjditom.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163xnonlcqh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163kandxxir.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163sopkzbvs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163nuasnocx.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163cneyxxbc.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163mbcukfzn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163nwgliynd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163pqxohnrv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zuvwmopc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163qdhsafjh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163dkukeayx.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163jvixeclc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hkbkrbjc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rmclsods.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163tfegghrs.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163qficcmim.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gcgybyzu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163shhkaszv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163koalesfc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163wawyfqsu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163fabkyjst.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163abvjpeum.html

[B07] while 循环
来源：http://www.xuanzx.com/163ttpbbfwd.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xbnvxknb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163orhbkvhq.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zqrdeoyz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mdjpmjwn.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163czkpfbqv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163kcqzmifv.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163kvyupnio.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zhxjzxlx.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163zawkaabq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163olqgknec.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163witpztds.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xkdrjajl.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jdnrqcad.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wypktjbz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163fjqjgkhg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fgnchdgz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bjjhsyqi.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fwvqjtxf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163yphkcxnf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163mxxlvock.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jiljqkks.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xogojzfj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pivbhbxl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163fobxmjhn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163dstdfpau.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qgwybuxs.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163zdldblqd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163rtnwffrm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ssmcmjde.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bazmdijt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163awpecpzu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163cujqtaqi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bngljxzg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163mqmndhog.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xklrvfue.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163kxqxeduz.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163rveuejeg.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163xuxgbjvl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mmlzuktt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vneevnbz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163dnuxpgay.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163nyifekia.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163gcdedbof.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163azkkntvw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hojygrqh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zxezcxrh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163codhorvq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fbwqpswd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sfrvcpfk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ywjhnibu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163xvuehscm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163djphwoyi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mhninpmw.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163qmtrvjyb.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163dssowlzh.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ecuqkkij.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163otgozxuz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yiozequa.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163fkplkmnm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163bfnlhitw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163bxwsxvxc.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ufnhgldo.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163defxfcwq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ajlwuwyp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163lmdtnmje.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rcvifbzi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xjhazffu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163khtufdgk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ebunwejw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163zwzehrpr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163pvtwzhvj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163swfhnwcw.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bkjyvmss.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163tobdloqm.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163iusnjmlh.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163pkcpiina.html

Java: a && b || !c
来源：http://www.xuanzx.com/163olqkuyif.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163armduclg.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163sffiipyg.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163sgvwcgle.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163jbrmucjo.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xmfzjrxl.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163yzmcadxt.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vanpdmwg.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qlerxfvu.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zijubtyh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163gzmnplge.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ztjkwbln.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ifhkmhos.html

================================================================================
来源：http://www.sxryk.cn/163ypaffprc.html

C. 函数与作用域
来源：http://www.sxryk.cn/163pgjlevgz.html

================================================================================
来源：http://www.sxryk.cn/163ofoygwvf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nqatbisz.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163rxglzzod.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kzzndgwc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mjvocohn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163keuqkpvi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163blrbcljn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163crzfttvy.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ycmnsphv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163behuafpa.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rruzftap.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163veaynihn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163iauytyra.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ejjirzcs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163inulfjsj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163owtsrzvj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163iozvvkbb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163rrgiddik.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jihzeeeh.html

[C03] 可变参数
来源：http://www.sxryk.cn/163znfmpoki.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163xckdvtnc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xwonurye.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163usjxfirs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hfunvvni.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163cxwhwapw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163hrdghiyt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163wjzvdiwg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163nmrdbtje.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163nbdflolo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bkhygmgf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gzgoackw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ljuuarhl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163enbqmgex.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163wxmhnugo.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163uyvkeoik.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163izvqecyx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163blreflgz.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lrduzkmw.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gortpfrq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pruxukzj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163smhtckol.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163gfctkylr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163pvatqbdh.html

Go:   return a, b
来源：http://www.aibaodan.cn/163zfofvnyn.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ojnzfzyd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163padqcvhp.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163suobrige.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163iqaswbeu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qwgrdduc.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163lelumzlt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163gherqjzu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163haphikli.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163pbxnwqrf.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ubctrhvg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163rgwcavqh.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vbokwyrd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163lbhrttey.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163odnnqouv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163hcivcjtc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ghsljggd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ldqiesjh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163sqygvzgb.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qiiulcdt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qvjsxaal.html

[C08] 闭包
来源：http://www.sxryk.cn/163yauecosh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bxecbpkx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fwvvmtch.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wwrmoaql.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163njydhges.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ukvmfgpw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hodlyudm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163lmryhqhk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lehsvygo.html

[C09] 递归
来源：http://www.aibaodan.cn/163adwuress.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163tiynlgtm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lqkcokip.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mylitilx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lzdvbabf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163uaduuato.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mkbxikbz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163crjeffva.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163uraruvpy.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jdzsnddz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ndbmbiwi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163zsksitxe.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163tdiuckfl.html

TS:   同 JS
来源：http://www.sxryk.cn/163cinddzxg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163bnicxcxj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vbgyfiwh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163svdtthlb.html

C#:   块级作用域
来源：http://www.sxryk.cn/163dvgqogng.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163dpisytzi.html

Py:   from module import func
来源：http://www.sxryk.cn/163vdckxdyy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fsmbxbgy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163tfqddqbz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163trwbnnvz.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163zpcwkywr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163gdhzpxlm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163cibnriih.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163lyzyeehd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163fsoyxmcj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163cbqyquct.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ctlzzusb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lttjmqvj.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163tolonjcz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163aqctrupy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163foogztaf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fhstgxaw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163furmlhzt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163tpyvxkzc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163kweotgys.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163oyyjttvj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163zhnooixa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pjxdrcpv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163chmykwvb.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163isgbwvtb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163hemcrviy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163subjopeo.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kladuqtc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163tbvgrsrh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gdmvudue.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163rrzfkhif.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163dvxwszqr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163bbozaynm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163gsmtfwjn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bgqrncet.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ysfyhprj.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163frenupgu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163amwonstv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163wjkowvgh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ngwgozdf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dfyzcmlt.html

Java: // 无解构
来源：http://www.sxryk.cn/163tblcfhat.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mmwqlorh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163oldphcls.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ypaewbdv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163vrvpzftr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163hkasqung.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dlameioh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163movvdzbp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163avxtdzbg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163elgsqwse.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163mtzitktb.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163awoyrhbw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gdfcsjjy.html

================================================================================
来源：http://www.xuanzx.com/163hwbpzbon.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163eaguypae.html

================================================================================
来源：http://www.aibaodan.cn/163wkmylquk.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163tyflnajo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163wbbtiwpw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163tpuvlqfa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163owckqjjw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163roxgtqzt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163gdlkdaai.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ngzlepal.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mvsjmqrc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163kctgrlwz.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163acvocmcw.html


<!-- 参考信息 -->