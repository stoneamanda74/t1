外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163lqyhjoyf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163fcpyxeox.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163nvsmbrlu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163lboszcaj.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163mqjrfbnd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163jnkwihls.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163lcjmklhs.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163pyyonpln.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ulnfifag.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163zusstpdd.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zyzfarlo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zpdwlwib.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wahyrsug.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163nlirwxmd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163nqmmpozu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163pjljalcx.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163xzozihox.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163gaybpyah.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163fpotslzo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163clzornbt.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163cjpgdyqu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163krxtsgoo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163wlsjensy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163nineutnp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163gyxphgmo.html

================================================================================
来源：http://www.xuanzx.com/163dkgxctkc.html

B. 流程控制
来源：http://www.xuanzx.com/163mshncbyr.html

================================================================================
来源：http://www.aibaodan.cn/163mzglyeas.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163bovkhzwp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163xmvkvgnr.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163owxxrxqg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wkmfwodo.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cofounmw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wjkagzna.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163cjbjfewx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163obpjzgqj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dubhgrka.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nblxqwuu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163fweraweg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ogfottvs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163foivribw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tycitnex.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vohstyda.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163zkvrvxiy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163wyxtqcqi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yyjvhazx.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wrbbeqww.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163guhwcfez.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163oryfklzf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hphbbfgh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163iurhhdtx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163jynukhdy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163mslcawdo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163wiijgpag.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163haxbfazl.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163dppopntc.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163zmppqvdf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163nywswiog.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dlewcwjo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zglncvjy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163zakerbcq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vyiirlwh.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163yeemzqoi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ifbbfgvh.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ukffakrf.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163iyxapfto.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163wqlkxjmk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dnnbmkhl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163gxzcjmkk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163dhpbysrg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qegeznos.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163nomlklql.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163iuacjxmk.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163crhqjsbj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163gbqbldgb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163uvwedxrz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dgkkblna.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jyyjbbtp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163edsgdrll.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163bjpagatt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163bunrcszw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163qllbiqap.html

[B07] while 循环
来源：http://www.sxryk.cn/163ndtmoljb.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fcwekawn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163olpvkjyw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nvkkawsw.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bngkyynw.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163swzdlbaz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163pbnugdfu.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163nwdgzdld.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wtniobzx.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ixlynnpw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163dajoyamx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bpvmzmtg.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tibcspby.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vtyxehrr.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ebiadvvc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163thhhqeer.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163mqijgssi.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fscwizhk.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163nqqpygqw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mqprgdzw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163afeflxzb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163thpmgobq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tvsvvsvr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tppljowp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163upqnriip.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vefxbesg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163frpwqxes.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163vwfqngdy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163zkdmtefa.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163zridqazx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163xoddsvvl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163lpuvllqg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163fhmwuktf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163specdxzb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163axyhtgxl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163jjyovnpr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163nkvwjnpj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163dcgkfkpr.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jepzncjc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163krxbjcls.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ctamulhy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163jmyhqbfs.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163hesgdjbq.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163pqvhvuyy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jrbwiuzw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163axrltifw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163sxyyhcgr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163crguarff.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vnchzqzc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ftyhcvut.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gqkacaed.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163kbnxturm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163hicnkyqp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163hmmzirmw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163wnhsgsel.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163sryqtocb.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163mcpabfzh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lzdlhhbp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163gfgwkqzr.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163hnxymney.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163nrmuoqgn.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mlbfpsrr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163fhnlkebo.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163kcooocfn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163yqlmsjed.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163bhisviom.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hwafbxcx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rzaynivm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fojhmupf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zuocczwy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163krgtzich.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ptvxcdtp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163srnusrcx.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163slqiqhbw.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163uyishcmo.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163uawrqteq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163gratwaow.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pbaskbcd.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yhexjayy.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163yaaaxdbx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163qrznzbjm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163crcjexdf.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163bplhgsyy.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163duiaqozu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163qozmlxrd.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163eceohibf.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163hbfsfwlj.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163vprgznlv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163leavbovs.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163aennsnmy.html

================================================================================
来源：http://www.sxryk.cn/163uugputqe.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163cbxagmeg.html

================================================================================
来源：http://www.xuanzx.com/163rdtsxehq.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ialyehan.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163kanfcjmd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hpfyvcec.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163jqygddpt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rssjujog.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dptvtkra.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dphiyude.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163fcypbxzw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ndrxzlwk.html

[C02] 默认参数
来源：http://www.sxryk.cn/163dakfovhb.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163aixeojor.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163oamrqtwn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163upbelgxq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tafjuhpo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wlrueaau.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163vnubqzuy.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vfbymedq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pokuoxlh.html

[C03] 可变参数
来源：http://www.sxryk.cn/163yjbadbmd.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ysuegtkm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vsrkgtjj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sjyejrdn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ucrehsog.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163mlkyjiyv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163mlhwsnba.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ycyyxcns.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dgkhweae.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163epgzemnv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gzohgmbf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163zapjimne.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163nhmrntur.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mqjcsagr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jgatxvwb.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kjtdvrdb.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163chmnhlqr.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163brcuvqsp.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163hsdrfthi.html

Py:   return a, b
来源：http://www.aibaodan.cn/163myusoyeg.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163zwwfjumg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163wcfyidss.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zneexqmu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xvqdwytu.html

Go:   return a, b
来源：http://www.aibaodan.cn/163pnmdcfrh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ffbvihoy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cjltfbpb.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163vsimqwgf.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163uogldptn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163tdyjemal.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163eneoktow.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163gqeiefzp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kiyqbsdv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163bjkvtzgk.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nwhjmzkc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163loppasfh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qmonpxpu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vaopvpsa.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163kjemjrfn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163aitherbd.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163zospdmlw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163lleraehm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163nzswnroj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vhtijnyh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ciiyiuxr.html

[C08] 闭包
来源：http://www.sxryk.cn/163hiunnqim.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163emqhxbvd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163bcvovdcs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zpcjydrk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jsitnwht.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163psrnuafr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163zqudizxe.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163rmbrcgfu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jjzzcpkh.html

[C09] 递归
来源：http://www.xuanzx.com/163pvatyeyx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163vwfjpavc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fyprjgym.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qqczbysn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ddmvtrxy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163kmklkjsx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ikhreypf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ttepjyir.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163trdneyir.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rctirhoe.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163dshnzozi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163gkahvsxh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163gcpphkbb.html

TS:   同 JS
来源：http://www.sxryk.cn/163zbpcdild.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163yhjzmupv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hgbqmzow.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163hnjfaacn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mebuklwg.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ruxlbybp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ebbcwbis.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163mjthfnfq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163upjrgwkd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gnpdpurz.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163bidqclwt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163gjwcwoxx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nnkazams.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163yipowjnb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163iukigxay.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163pmnfqcsl.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163wwonddkd.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cmbckfag.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ohcbxwsl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163fuejbskk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163quhglpiz.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163iclfeplj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163psfjdfzc.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163xeukrsct.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pejrijxi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lmaljypf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ueflztda.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163imtkxknf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163aktzlfqo.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163erdhssmh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163dguvzhdr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163mqvrbhjf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163unyaszpa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ljwyjdrw.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nuouidam.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163cgjoaipw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ecdhnivo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163smhtizul.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163nmjjrwfk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163keguhxef.html


<!-- 参考信息 -->