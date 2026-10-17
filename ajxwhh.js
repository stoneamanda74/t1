外链999!wailian999！

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ignuivkb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163dqppzkrm.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163udkjkxvt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163jacvhhxp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163alxcucze.html

================================================================================
来源：http://www.aibaodan.cn/163guntflvf.html

B. 流程控制
来源：http://www.aibaodan.cn/163qambevmg.html

================================================================================
来源：http://www.aibaodan.cn/163zmabeniv.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ppqoppua.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163wtsdmqwd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163awkxydqo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163clmnbbxg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yajsxslj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jyjputjx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163roriqksh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163qeafpfdd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ewrqkubt.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163usagzywf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163eebipder.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163edbdfyhj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ztuxjesw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cldwdylu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lxlglnfc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163wvofjqmf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163uhamimfz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uyynnzwt.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163vpoznota.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163tpsfzvyi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163csqjlafv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yqytisej.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163nihkamkg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xdlxjymx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163xyvfncnr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163qngxrcyt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ofsjbofp.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163todbvkol.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163lhsqgdni.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163phtszwyz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vmdzuxim.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163baxjedtl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163zjywkmik.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wpchkowj.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ppkpmzof.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163cjjqnqhg.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ybaidmis.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163aarlvuxk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163wfhrkyxm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ehwwnpov.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163etcfboty.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163dznnzcyr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163lnaquseu.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163lpfjbylf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163qqhvqnuy.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163uptrmhhz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nznkpqjl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ftfdjqzj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163pkwejddq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163pahryrkp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ijkllefs.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163zegkemrv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163qsikedqk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163tpexifco.html

[B07] while 循环
来源：http://www.xuanzx.com/163vnxdqrcv.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163frxdlnke.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163oceqkfgn.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vhrztbbi.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163scfungja.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163andkvbed.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163xpbztvpv.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163rajwafiw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rsicqpvh.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163mwrtxsxx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163iplrolfa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163dwhjwvup.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163luioxbqc.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gjgjjunm.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yyqtagny.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163xgfmbauh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163erzwgrkq.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bibljlif.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163pijpzqpn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163trvmbqaq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163mdhyokme.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163whbjxvij.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yfjreonq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ocxauuly.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qntorzrh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zrlnnpcr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zxgbqivp.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163oxqdanoz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ekjfsplo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163vlrzrkkx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163cublfjxv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163myeqhuzp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163eubpjgen.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163winmmsya.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dkgpsnvg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163hljjkaij.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163qkvzxazq.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163dqmqsavw.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163hjzkqnab.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mzzaistc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163aytedkjh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163euczfrwe.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163pbppmkkn.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163qobltjds.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mfjpjvni.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gbtilizz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163nkildfci.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163fwxeybgo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jbjabumw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nrzdfgzc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kkwqfqse.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163aqzgfxyv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ibjehnxn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163jgllzijq.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163vggnjaws.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163pxjmnhhc.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163tksbaxda.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hdiizlzq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wunpmnqb.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ydlgzmiu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xxgopkku.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ssgknptp.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ammugjbc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bcfyyvmr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163rakzkblb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163iwyqvetc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vgqilmrg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tclrjwfw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163msymxfxj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163dpvqufpi.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163goqdcdze.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163yvdvxjoe.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mqegiyqe.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163wkbykzhl.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163fciijaav.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163rqbeeifd.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163tcwjrhvw.html

Java: a && b || !c
来源：http://www.xuanzx.com/163nviixcce.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163hopcwzmv.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ueafdfcv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yoiabvjo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gqevenge.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lszozyvk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163snhbnodc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163orsvahmz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xdyhbjox.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163oqrnlziz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qzixsgro.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xhiaippf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wenukwla.html

================================================================================
来源：http://www.xuanzx.com/163zatkbrfl.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163enlkgwon.html

================================================================================
来源：http://www.xuanzx.com/163pgqmtjxa.html

[C01] 定义函数
来源：http://www.sxryk.cn/163illqzzvy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163nyopegid.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163sizhwmin.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163nfiadlrf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vixsgqjz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rbgetijr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ujfurskr.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163cmsdrfby.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163auktrohz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163jgwfhccc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163remjmgcb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163fmtmnpat.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163xhnemrsm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163lqtprjyl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jpgkwcab.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163bzldhkqb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ysqcgrui.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nkxuvmof.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163mrzibonl.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nlwcjwmj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ywoewpbl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163euwwsqdz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xxtluprw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163refvlkcc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163mkscgtce.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163fjegwslr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163wsqmoxby.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163mlvpwkff.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hhyntuwo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163fpjbrsxy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bhnpqohg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163uslbxnvm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163lphbzyew.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163fxdergpo.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nkqhexqe.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mjbvooha.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163owcdellk.html

Py:   return a, b
来源：http://www.sxryk.cn/163tkjuuepa.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163iwhixadr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163slvayqas.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163bptxmqql.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163dkwsksdk.html

Go:   return a, b
来源：http://www.xuanzx.com/163hxuthpmi.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163kpcignog.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163nufcfuns.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bnrrlyjr.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zvrujtxs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jxqvcgsm.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163fqvubeal.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163fgafceqd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163pioxxplx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qyjtlhim.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jltvnldo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ahgaqmjg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163hnwgpapj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163qdalhvhf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163gtgbtitn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163sofxcyfo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163nehmmwxv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163uacxwhhd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163bxktszro.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163sltrxseb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163dljgryal.html

[C08] 闭包
来源：http://www.xuanzx.com/163unrwcabk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163oxwslana.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ltdhjdmc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163eccrwiuf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hubdylba.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163squmabvi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rotzmsbn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163sfezeiti.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xkmqmttl.html

[C09] 递归
来源：http://www.aibaodan.cn/163pthxyqfs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163wqvtdzdr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163acrbzaex.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nfludtuf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xqsubvpb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ecnicqsk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163plorcvpk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163obdlbvut.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ksyptpch.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ejgfyotz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163llpcbqdt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163nktkyfil.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163jkvsudxw.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zaylwcoi.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qxoaalfm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163yxarvhsc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tmadsfuc.html

C#:   块级作用域
来源：http://www.xuanzx.com/163oikeobkb.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bfpqdosw.html

Py:   from module import func
来源：http://www.xuanzx.com/163xkqwwqnd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ftkyugij.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163swfbgggy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163guxnekbh.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mawuezsq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ralywwoy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163raolcboe.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163zqsdwipp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163rvvzxbik.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vrqruxfs.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163xdomhajl.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xkvaxxri.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163pgorgsbm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qufnzbas.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163zbaslsjh.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163cqlhtbaa.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163nvdynrij.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163cvdyyrkq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163gttegfio.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tjvaejnz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163llbqyech.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yicandje.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zyrukuli.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pseceubq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163omjxphov.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xzzcxuxd.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163coohgjmf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163dproqomm.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163kfufrdfx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163nikgqlok.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163murypudd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163odrohviw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163goqqmfap.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163hcungflb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163lergtqjd.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163wkferghg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qvwqqnsx.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163lsckmajp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163gtyoybvd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zfklgjeo.html

Java: // 无解构
来源：http://www.aibaodan.cn/163alknwhxs.html

Go:   // 无解构
来源：http://www.xuanzx.com/163jlfyhrge.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163aipfwnwt.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163yeeztyzs.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163utityvnk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163jzwvgtqw.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ciovpfgi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163oertsodu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163lobbieum.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163upkjvhhk.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ubpynuqu.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163iklnamgo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163tvuglykw.html

================================================================================
来源：http://www.aibaodan.cn/163dnacmeyv.html


<!-- 参考信息 -->