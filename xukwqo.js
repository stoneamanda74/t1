外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ewykyfme.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163pfusykeo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vrnfylsq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zwhbswju.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ewywsmpi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163hwiwjjcg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163vqrywqsl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163bwczdpwc.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163eazyyqqy.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163tlvlckxw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163mmginnti.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163jtsfbflb.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163husifuin.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ikfhpxez.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163cmyitkww.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163obwymqmj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163bcwqnzza.html

================================================================================
来源：http://www.xuanzx.com/163bpmauowp.html

B. 流程控制
来源：http://www.sxryk.cn/163wvhlqreb.html

================================================================================
来源：http://www.xuanzx.com/163ndwijvos.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163dcxfywal.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163boatldqq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163iaywisjx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163stdcjozd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163krprafgy.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nedkojiu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163mnsaayxz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163bgpfkram.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163slhzsmnw.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163spfovdud.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163injfztkg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ljlzblok.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mhlsroro.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wcvdawla.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rzqogszh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163lhrlrjab.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163gnqdxxcl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gniyrakl.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xfedsujp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163utarsedr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ularneht.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dceubyxg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qboyizhu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rszafzlw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163orvawxab.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163gvznekja.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163kxphiiml.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163lrpmzjum.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163yzzufpje.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ujgkxdqw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zhysaqai.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163pphthyvb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163pbslxqfw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163gvlyoigm.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163njjovywn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163sleocsoe.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163tjgltbtx.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163zlalzxcv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163peqkuqhw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163beecokwe.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wdtibeqb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163hnpocrag.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163rvvfwiey.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jibxuyfg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163bhadovuv.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163jkswzbmd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163zvwezdvy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tvuwbaku.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bdkilchu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kcifojor.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163kttckcsq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163egklxuxp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163phqmiktu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163esrazmuj.html

[B07] while 循环
来源：http://www.sxryk.cn/163kmbmjzqe.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xwhovlwz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163eozsjmvb.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163owbvxrwt.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yunaqjei.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zcjjuxog.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163oxrepnlt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163altqqnep.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ozknvwul.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163gbsnukxi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bienowfl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163yzksfikl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gdcwyotw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mxibmwih.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163osfqpbek.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163wcqooaqk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163jxbbzpzz.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163spkmbppz.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163mfzqerfq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cqpidkcp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163gpnulusr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163brhateog.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xvojdbnl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163flrdgacl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ltqmtnjk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163olilbqix.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163macjpnuq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163evxflekh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163upldsush.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cmcsstxo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163nrawprtq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163webvaczt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ygoifeot.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163hpchvbjl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ittqzowr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163uuqjqddl.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163bomhmrzk.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163titlcnmf.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163bawbhycq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163buckuqdj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qooevtyz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163vicrupjh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163rjigleso.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163vbncrxdx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jntkdipk.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bsizkake.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163rwpwslvm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163doubakyk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163aiufqkoi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ftszpemo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cmqjmqjz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qtouyjzk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163rmrqdvxi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wlcesgcy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nxgcmtbg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163sayhoqaw.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ghxwdgyv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163urcmbruf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kffgtdrp.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163svhvixzy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163dqrptlwo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163durdvdda.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ykpsmguo.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163myzkhqap.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jnvqyflc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163oftlppnq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nqpqxdpq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ajstvrcv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163inqtxxmm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ltnryvee.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163cbpkdafh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163zmjmmepi.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163aviacjub.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ytqmbtoi.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163dhurhsfg.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163cknuzalj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163lohadzju.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163mjnjpbju.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163fgmfuwha.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163oohvsrpj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zuuqxzpe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rnjsxryt.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uwfdcybu.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163kmpkodzf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ihrwezko.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163qjsdupph.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163okgkvitc.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163kemyskqr.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ufotegsp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163zpbcaccu.html

================================================================================
来源：http://www.sxryk.cn/163spslkudd.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jpkhbstx.html

================================================================================
来源：http://www.xuanzx.com/163zdwwdlpl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163bdhjttpk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163bhvlmojw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ajhurcjq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163fwoycter.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fuxsibct.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oheupqki.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163gopiwqmx.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163nnhjzsuw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163obhbcbpn.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163dvxbyaxs.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163epmdrkhe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163lpqshyus.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163agojxlzd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pkfujsby.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163nhblqbqi.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163nfxsnjph.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163wpbqgwfz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163dyxfkhgq.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163oqsbrtsz.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163klsudykp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mgohrgfd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163cogsxxny.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kbjairck.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ntbbodwd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163daeagpha.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163xakwgzxv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163yiqmqbbp.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163itzulwfv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163oydynwhw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163onjbzrhx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nmruznlo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rldwreti.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163rlsqeakz.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163tslvjxsj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jkveovlq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xuzefofb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163uwnbtchy.html

Py:   return a, b
来源：http://www.aibaodan.cn/163kjiaepry.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163wcfhuykc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163lxjeggsu.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ulzcvfsn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163dukbzfji.html

Go:   return a, b
来源：http://www.aibaodan.cn/163lnrxqiet.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163oghxubjl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163actpsnnv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163nahbeajx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hwxukitr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zzfczoad.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163xwyyiwqk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163qacwlynr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163fpzxbrwz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xjuefbkb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163kyujhobo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163olrunezm.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163peygcyne.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163aiiciglg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163rrfmqrrb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ydjfwvum.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ddnpqnoi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163trcitxjb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163krftrigi.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163akxqutjm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163yueqjybj.html

[C08] 闭包
来源：http://www.sxryk.cn/163fslvwttb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163agqqccfu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163naacslzn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wrynyyzy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ohbqnqpv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pyfpnodz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163spjmyvrb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ybxdizju.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mywinucu.html

[C09] 递归
来源：http://www.aibaodan.cn/163aalajhno.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ovuyyoda.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163wlgjyrfg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nrnpevrj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fsrcnzyw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163hbpqbslu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163votnmuqd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163wqiomedh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163vkysdevn.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163dagovwwz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jzspapvx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163rksntxrq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163izrrrvji.html

TS:   同 JS
来源：http://www.sxryk.cn/163ngwpdyeg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163bkkaazcg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163nezuygyw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tpftbgdt.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ilfvrngp.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163xcwfnxek.html

Py:   from module import func
来源：http://www.sxryk.cn/163bscoricp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163iirficmb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ilgajqxg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163xsepizvy.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163zwhpxend.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rxnxlmqh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163bjobacde.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163bkklxevb.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163kpwrlrwa.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kwgqcpry.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163abghlask.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ruvrleqz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163keykggfj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fwvzauog.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163trmwqrzy.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163klpdubui.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163unmtiyak.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163fdhuukky.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163tuimpmmq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fgvsjssp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163zshjuxgj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tlizncud.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dpsqiibr.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163kmfrbvvd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hifefjwu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163pubhmncr.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jqtdrkye.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163lpnlszmz.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bqhmcjcp.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163gobndybh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163omxqrmsr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zrntvdsh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xhwmbeyt.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163cfcibpea.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163fquhwawx.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163hrueuyno.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163skrrhxfx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163hwbyohfg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nmlmabsp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ashkraic.html

Java: // 无解构
来源：http://www.aibaodan.cn/163fnzwaoqu.html

Go:   // 无解构
来源：http://www.sxryk.cn/163plwkdojj.html


<!-- 参考信息 -->