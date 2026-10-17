外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163zvsbyizk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163xilawqvy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163qiscflur.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163jnxukbhc.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163qsrcmisr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163axfyqrfm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163nldkfhhm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163rkmyjzgy.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163swyhrtry.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163egwmbosp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ywhdzxuk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163tcgrathf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163avibbinj.html

================================================================================
来源：http://www.xuanzx.com/163lxxtxnln.html

B. 流程控制
来源：http://www.aibaodan.cn/163ywobiybn.html

================================================================================
来源：http://www.xuanzx.com/163qocyltfx.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163mibreknv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163chredcbn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163vgzlflht.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pkybdgtg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bbqgncnd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163otuujipw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163rqdrrmbd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163hvjlcqlq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nqyosbpb.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163hyudvihy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163nnegoeuw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163cfrwivgw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uhlilckh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xvpjohcf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lroitkhu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163rygcdbfq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163lthybkji.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mkbhhziu.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163trgzilei.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163cyvtmttc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ljaqwqlv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bmvreklh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xvuolbpo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163pyszonhn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163lokgzrhp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163bwkvopda.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163wptjifqp.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163bfodvcgz.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163mrcscymc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163mhqsbjui.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163svgfyaer.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jegprapt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163vhylnkap.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rnycxkhb.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ohlfysbb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163adsyislh.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163wvnvvlai.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163devfrhfg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163pneaeagy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163zkudekxx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163iiqfvqcf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163endhrhpr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163fbeyntdr.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163eghvpbod.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163molzrcln.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163skgvzgoq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lxfwqmlz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163jlbvrrka.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163mhichmbf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163aokjwgro.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163cyhryzgo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bweaonal.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ueoaclww.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vjgwgudm.html

[B07] while 循环
来源：http://www.sxryk.cn/163alkmftub.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163wflxqbwo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163cehwasvw.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163onsklhzh.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yufswmzl.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yroijqii.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163imihapbz.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163cslbgpfa.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ciakzpyq.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ouubpaao.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163nkfztape.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163htifxqgs.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yaegjksv.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uxlynakd.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uunypjqw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vwsbznsz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163gulrutai.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qyqkvsby.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163lmakmian.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163kpxrjmyf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163jntebdph.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zqqpfabm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163femarftw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zdwtqmaj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163zixmyyro.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163dnwvaoef.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ngyhwryv.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xjzmbodu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163moqlerjn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qghwxkpd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163utqjhjak.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kxqrzmmi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163wxnwklcs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163rftzkagj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163zymqzucq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163vveietdu.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163trsvboeu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163gmvbejry.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163fnlhjxil.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bxszudic.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163uuvmpexf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ngpqnorp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163bnabhxhw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163vrbbyrlg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xxmsyptu.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163fvyvijkm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jkojkaeh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163rkbuuuof.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wjwjktfv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ghvdevey.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jsqkcwpn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163hpybawiv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163fegdlywn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163fvvfnddr.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163zuuuckye.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163huguyfxh.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zwajabaq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163sccgoduq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dqeewliu.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163tkeywttt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163nodenxuw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163pifeexhj.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163swbicvck.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163qnavcopy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163offiksaa.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163sxxfjwvq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ryoefosa.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kmegnccs.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xcohfpqb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hepriihn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163oggzlyof.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163glglkekv.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163jczfdzft.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163rlzxchqa.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163lafxgitw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163rdbydnds.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zlnkyavb.html

Java: a && b || !c
来源：http://www.xuanzx.com/163iezyibqd.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163jpjxvius.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163fqqxmihh.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fmqvtxgo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163psqawsvi.html

Py:   if not data: return
来源：http://www.xuanzx.com/163tnnvwknw.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rtlcudqc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163fkwefkic.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163znggiofp.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gdpfxqjt.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163cvsxlglr.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163dseshfog.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163wsyeeclr.html

================================================================================
来源：http://www.aibaodan.cn/163dkgqpkuh.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pyueeipw.html

================================================================================
来源：http://www.sxryk.cn/163fzpzxtjv.html

[C01] 定义函数
来源：http://www.sxryk.cn/163pnqghtyd.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qbqeynxn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dkphjqrm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163tawmmgbs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yhzmvfjp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163moapjvtd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zvpkxhpg.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163wesnppmz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ylgharuz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163jjiqafug.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ztiuotou.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163wxdxjndz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163oegqjlmp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163uxnkhiwh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qoucvgfo.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wzrjxwhe.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163lzsrqnna.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163hpkerbuw.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163yhyjasov.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163oeipbxqm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qrorlgim.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ywnupgjo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mkqtbfvs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ciffnfnw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163yyzexceu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wlbrwimp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163yyixttpq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163jcswjdrp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163glypgwiv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wjzkovpw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163gnfwhwgo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fbvnjobh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163uuywimip.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163cdvavuwl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lmsqyiaw.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163woipideq.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163berapuwh.html

Py:   return a, b
来源：http://www.xuanzx.com/163bpklnute.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163zpwpvjbv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163emwrdznh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163cgwrghwp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rtkuoqox.html

Go:   return a, b
来源：http://www.xuanzx.com/163wzwnwgwc.html

Ruby: return a, b
来源：http://www.sxryk.cn/163vgiowomb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jbahpenm.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163fyzctysz.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bwjevakq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163wxacnnbs.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163etxezpzr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163yxmmwiqr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163iwsnbxao.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163gauvckaz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163cixdikgp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lckpqdki.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163bbidwoyz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tvpljruz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wksootsp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ekblhshx.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163bjvucnba.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163uuikiuxa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163bovkbdyt.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163uerjtyid.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163vltjurog.html

[C08] 闭包
来源：http://www.xuanzx.com/163ydjbfdjl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163iyqqestw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ppaephbm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pdwenjzc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uofxfujm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163olotjlsr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rnbgqsku.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jcxpuufn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zcfqstki.html

[C09] 递归
来源：http://www.sxryk.cn/163awngxtop.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vyftquyh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163wlexemty.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wjcgmlza.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fztmzzka.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163thpxinwd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ojblthna.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163rpbqdgom.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163rbszsjhw.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163gxfemoog.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163bgzqnzwd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163bxqmqwys.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163afpcqisj.html

TS:   同 JS
来源：http://www.xuanzx.com/163trxnmymy.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ilyhqjvy.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163tdplgxth.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163huokstyd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163cepxycbm.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163entglpac.html

Py:   from module import func
来源：http://www.aibaodan.cn/163slusbmzw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163fngxtzcm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163bumjunst.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ihztdedp.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wztumhvc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163gfvhuhwm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ykcxfffa.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163wlfckyba.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zjqdgtrr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163awlvnbrf.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163agxajhhf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163obcoacvi.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163krhemqre.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qfldaott.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ogaykyxb.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163lkobmzvd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mnshgcah.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163lplwiuty.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ftsviblx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fvtpcore.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163yqxogkey.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163esqppxhz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gbdouixc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ihcrclns.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163uxuytovm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163llbbdake.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163iekxdbcu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163islyfbta.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163nuwupxzi.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163uhhahfzs.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163pxtduogm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gfdtaxis.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163bnphdesc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ifgepxaa.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163kfoarasm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163izkzdxhx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zqcatfhg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163yhqnszgw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zmoyfaae.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163vsipfjco.html

Java: // 无解构
来源：http://www.aibaodan.cn/163aerfzspv.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hbtcbphr.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xopywlsb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163figjlhmk.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163nmxbpnsu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163hwnyfwil.html


<!-- 参考信息 -->